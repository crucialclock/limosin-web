import { Outlet } from "react-router-dom";
import AnalyticsRouteTracker from "../analytics/AnalyticsRouteTracker";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout() {
    return (
        <div className="theme-page flex min-h-screen flex-col font-sans">
            <AnalyticsRouteTracker />
            <Navbar />
            <div className="flex-1">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
