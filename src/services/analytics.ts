type GtagCommand = "config" | "event" | "js";
type GtagParams = Record<string, string | number | boolean | Date | undefined>;

declare global {
    interface Window {
        dataLayer?: unknown[];
        gtag?: (command: GtagCommand, target: string | Date, params?: GtagParams) => void;
    }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;
const scriptId = "limosin-ga4";
let initialized = false;

export function isAnalyticsEnabled() {
    return Boolean(import.meta.env.PROD && measurementId);
}

export function initAnalytics() {
    if (!isAnalyticsEnabled() || initialized) {
        return;
    }

    window.dataLayer = window.dataLayer ?? [];
    window.gtag =
        window.gtag ??
        function gtag(...args) {
            window.dataLayer?.push(args);
        };

    if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
        document.head.appendChild(script);
    }

    window.gtag("js", new Date());
    window.gtag("config", measurementId!, {
        send_page_view: false,
    });

    initialized = true;
}

export function trackPageView(pathname: string) {
    if (!isAnalyticsEnabled() || !measurementId) {
        return;
    }

    initAnalytics();

    window.gtag?.("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
    });
}

export function trackEvent(eventName: "click_contact" | "click_whatsapp" | "view_services") {
    if (!isAnalyticsEnabled()) {
        return;
    }

    initAnalytics();
    window.gtag?.("event", eventName);
}
