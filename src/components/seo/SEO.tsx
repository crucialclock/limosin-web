import { useEffect } from "react";
import { siteConfig } from "../../config/site";

type SEOProps = {
    canonicalPath?: string;
    description: string;
    image?: string;
    robots?: string;
    schema?: Record<string, unknown>;
    title: string;
};

const managedSelector = "data-limosin-seo";

function absoluteUrl(pathOrUrl: string) {
    if (/^https?:\/\//i.test(pathOrUrl)) {
        return pathOrUrl;
    }

    return `${siteConfig.siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

function appendMeta(attributes: Record<string, string>) {
    const element = document.createElement("meta");

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    element.setAttribute(managedSelector, "true");
    document.head.appendChild(element);
}

function appendLink(attributes: Record<string, string>) {
    const element = document.createElement("link");

    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
    });

    element.setAttribute(managedSelector, "true");
    document.head.appendChild(element);
}

function appendJsonLd(schema: Record<string, unknown>) {
    const element = document.createElement("script");
    element.type = "application/ld+json";
    element.textContent = JSON.stringify(schema);
    element.setAttribute(managedSelector, "true");
    document.head.appendChild(element);
}

export function SEO({ canonicalPath = "/", description, image = siteConfig.defaultOgImage, robots = "index, follow", schema, title }: SEOProps) {
    useEffect(() => {
        const canonical = absoluteUrl(canonicalPath);
        const ogImage = absoluteUrl(image);

        document.querySelectorAll(`[${managedSelector}]`).forEach((element) => element.remove());
        document.title = title;

        appendMeta({ name: "description", content: description });
        appendMeta({ name: "robots", content: robots });

        appendLink({ rel: "canonical", href: canonical });

        appendMeta({ property: "og:title", content: title });
        appendMeta({ property: "og:description", content: description });
        appendMeta({ property: "og:image", content: ogImage });
        appendMeta({ property: "og:url", content: canonical });
        appendMeta({ property: "og:type", content: "website" });
        appendMeta({ property: "og:locale", content: "pt_BR" });
        appendMeta({ property: "og:site_name", content: siteConfig.brandName });

        appendMeta({ name: "twitter:card", content: "summary_large_image" });
        appendMeta({ name: "twitter:title", content: title });
        appendMeta({ name: "twitter:description", content: description });
        appendMeta({ name: "twitter:image", content: ogImage });

        if (schema) {
            appendJsonLd(schema);
        }
    }, [canonicalPath, description, image, robots, schema, title]);

    return null;
}
