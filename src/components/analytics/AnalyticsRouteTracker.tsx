import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initAnalytics, trackPageView } from "../../services/analytics";

export default function AnalyticsRouteTracker() {
    const location = useLocation();
    const lastTrackedPath = useRef<string | null>(null);

    useEffect(() => {
        initAnalytics();
    }, []);

    useEffect(() => {
        const path = location.pathname;

        if (lastTrackedPath.current === path) {
            return;
        }

        lastTrackedPath.current = path;

        const timeoutId = window.setTimeout(() => {
            trackPageView(path);
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [location.pathname]);

    return null;
}
