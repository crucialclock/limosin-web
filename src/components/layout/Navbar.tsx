import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { trackEvent } from "../../services/analytics";
import Logo from "./Logo";

const navigationLinks = [
    { to: "/", label: "Início" },
    { to: "/servicos", label: "Serviços" },
    { to: "/contato", label: "Contato" },
];

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMenu = () => setIsMobileMenuOpen(false);

    const trackNavigation = (to: string) => {
        if (to === "/contato") {
            trackEvent("click_contact");
        }

        if (to === "/servicos") {
            trackEvent("view_services");
        }
    };

    const linkClasses = ({ isActive }: { isActive: boolean }) =>
        `cursor-pointer relative py-2 text-[0.92rem] font-bold tracking-[0.01em] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:origin-center after:transition-transform after:duration-300 ${
            isActive ? "theme-text-primary after:scale-x-100 after:bg-(--color-accent)" : "theme-text-muted hover:theme-text-primary after:scale-x-0 hover:after:scale-x-100 after:bg-(--color-accent)"
        }`;

    const mobileLinkClasses = ({ isActive }: { isActive: boolean }) => `cursor-pointer block w-full border-b border-(--color-border-soft) py-4 text-lg font-bold tracking-normal transition-colors ${isActive ? "text-(--color-accent)" : "theme-text-primary hover:text-(--color-accent)"}`;

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-(--color-border-soft) bg-(--color-canvas)/92 backdrop-blur-xl">
                <div className="page-shell flex h-16 items-center justify-between sm:h-18">
                    <Link to="/" onClick={closeMenu} className="relative z-50 cursor-pointer">
                        <Logo />
                    </Link>

                    <nav className="hidden items-center gap-8 md:flex">
                        {navigationLinks.map((link) => (
                            <NavLink key={link.to} to={link.to} onClick={() => trackNavigation(link.to)} className={linkClasses}>
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="flex items-center md:hidden">
                        <button className="theme-border cursor-pointer rounded-xl border bg-(--color-canvas) p-2 theme-text-primary transition-colors duration-200 hover:border-(--color-accent)" onClick={() => setIsMobileMenuOpen(true)} aria-label="Abrir menu" type="button">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {isMobileMenuOpen ? <div className="fixed inset-0 z-50 bg-(--color-brand-black)/70 backdrop-blur-sm transition-opacity duration-300 md:hidden" onClick={closeMenu} /> : null}

            <aside className={`fixed top-0 right-0 z-50 h-dvh w-[min(24rem,92vw)] border-l border-(--color-border-soft) bg-(--color-canvas) px-5 py-5 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="mb-6 flex w-full items-center justify-between border-b border-(--color-border-soft) pb-4">
                    <Link to="/" onClick={closeMenu} className="cursor-pointer">
                        <Logo />
                    </Link>

                    <button className="theme-border cursor-pointer rounded-xl border bg-(--color-canvas) p-2 theme-text-secondary transition-colors hover:border-(--color-accent) hover:theme-text-primary" onClick={closeMenu} aria-label="Fechar menu" type="button">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col">
                    {navigationLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => {
                                trackNavigation(link.to);
                                closeMenu();
                            }}
                            className={mobileLinkClasses}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>
        </>
    );
}
