import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const siteUrl = "https://limosin.com.br";
const siteName = "Limosin";
const ogImage = `${siteUrl}/og-image.webp`;
const ogImageWidth = "1733";
const ogImageHeight = "907";
const ogImageType = "image/webp";
const ogImageAlt = "Limosin - criação de sites institucionais e landing pages";
const defaultDescription = "Criação de sites institucionais e landing pages para empresas que querem fortalecer sua presença digital e facilitar o contato com novos clientes.";

const routes = [
    {
        path: "/",
        title: "Criação de Sites para Empresas | Limosin",
        description: defaultDescription,
        schema: {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteName,
            url: siteUrl,
            logo: `${siteUrl}/logo-texto.svg`,
            description: defaultDescription,
            email: "contato@limosin.com.br",
            telephone: "+5511991280957",
            sameAs: ["https://www.instagram.com/limosindev"],
        },
    },
    {
        path: "/servicos",
        title: "Serviços de Criação de Sites | Limosin",
        description: "Conheça os serviços da Limosin para criação de sites institucionais, landing pages e páginas para empresas que precisam fortalecer sua presença digital.",
    },
    {
        path: "/contato",
        title: "Contato para Criação de Sites | Limosin",
        description: "Fale com a Limosin pelo WhatsApp para conversar sobre criação de sites, landing pages e presença digital para o seu negócio.",
    },
];

function escapeHtml(value) {
    return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function seoHead(route) {
    const canonical = `${siteUrl}${route.path === "/" ? "/" : route.path}`;
    const tags = [
        `<meta data-limosin-seo="true" name="description" content="${escapeHtml(route.description)}" />`,
        '<meta data-limosin-seo="true" name="robots" content="index, follow" />',
        `<meta data-limosin-seo="true" property="og:title" content="${escapeHtml(route.title)}" />`,
        `<meta data-limosin-seo="true" property="og:description" content="${escapeHtml(route.description)}" />`,
        `<meta data-limosin-seo="true" property="og:image" content="${ogImage}" />`,
        `<meta data-limosin-seo="true" property="og:image:width" content="${ogImageWidth}" />`,
        `<meta data-limosin-seo="true" property="og:image:height" content="${ogImageHeight}" />`,
        `<meta data-limosin-seo="true" property="og:image:type" content="${ogImageType}" />`,
        `<meta data-limosin-seo="true" property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />`,
        `<meta data-limosin-seo="true" property="og:url" content="${canonical}" />`,
        '<meta data-limosin-seo="true" property="og:type" content="website" />',
        '<meta data-limosin-seo="true" property="og:locale" content="pt_BR" />',
        `<meta data-limosin-seo="true" property="og:site_name" content="${siteName}" />`,
        '<meta data-limosin-seo="true" name="twitter:card" content="summary_large_image" />',
        `<meta data-limosin-seo="true" name="twitter:title" content="${escapeHtml(route.title)}" />`,
        `<meta data-limosin-seo="true" name="twitter:description" content="${escapeHtml(route.description)}" />`,
        `<meta data-limosin-seo="true" name="twitter:image" content="${ogImage}" />`,
        `<meta data-limosin-seo="true" name="twitter:image:alt" content="${escapeHtml(ogImageAlt)}" />`,
        `<link data-limosin-seo="true" rel="canonical" href="${canonical}" />`,
    ];

    if (route.schema) {
        tags.push(`<script data-limosin-seo="true" type="application/ld+json">${JSON.stringify(route.schema)}</script>`);
    }

    tags.push(`<title>${escapeHtml(route.title)}</title>`);

    return tags.join("\n        ");
}

function replaceSeo(html, route) {
    return html
        .replaceAll(/<meta data-limosin-seo="true"[^>]*>\n?\s*/g, "")
        .replaceAll(/<link data-limosin-seo="true"[^>]*>\n?\s*/g, "")
        .replaceAll(/<script data-limosin-seo="true" type="application\/ld\+json">.*?<\/script>\n?\s*/gs, "")
        .replace(/<title>.*?<\/title>/, seoHead(route));
}

const distIndex = join("dist", "index.html");
const baseHtml = readFileSync(distIndex, "utf8");

for (const route of routes) {
    const html = replaceSeo(baseHtml, route);
    const target = route.path === "/" ? distIndex : join("dist", route.path.slice(1), "index.html");

    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, html, "utf8");
}
