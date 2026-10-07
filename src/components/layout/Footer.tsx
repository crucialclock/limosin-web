import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { siteConfig } from "../../config/site";
import BrandShape from "../brand/BrandShape";

const currentYear = new Date().getFullYear();
const email = siteConfig.contactEmail;
const whatsappMessage = encodeURIComponent(siteConfig.whatsappDefaultMessage);

const socialLinks = [
    {
        label: "WhatsApp",
        href: `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`,
        icon: FaWhatsapp,
        external: true,
    },
    {
        label: "Instagram",
        href: siteConfig.instagramUrl,
        icon: FaInstagram,
        external: true,
    },
    {
        label: "Email",
        href: `mailto:${email}`,
        icon: MdOutlineEmail,
        external: false,
    },
];

export default function Footer() {
    return (
        <footer className="relative overflow-hidden bg-(--color-brand-black) text-(--color-brand-cream)">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <BrandShape type="circle" className="-bottom-24 -left-20 h-60 w-60" color="rgba(255,214,44,.18)" />
                <BrandShape type="diamond" className="-right-10 top-8 h-32 w-32" color="rgba(237,234,222,.16)" />
            </div>

            <div className="page-shell relative z-10 flex flex-col gap-4 py-8">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                        <img src="/logo-texto-monocromatica-branca.svg" alt={siteConfig.brandName} className="h-7 w-auto" />
                        <p className="text-xs font-medium leading-none text-(--color-brand-cream)/60">© {currentYear}</p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 md:justify-end">
                        <a href={`mailto:${email}`} className="text-sm text-(--color-brand-cream)/70 transition-colors duration-200 hover:text-(--color-brand-yellow)">
                            {email}
                        </a>

                        <div className="flex items-center gap-2">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noreferrer" : undefined}
                                        aria-label={item.label}
                                        className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(--color-brand-cream)/20 text-(--color-brand-cream)/80 transition-colors duration-200 hover:border-(--color-brand-yellow) hover:text-(--color-brand-yellow)"
                                    >
                                        <Icon className="h-3.75 w-3.75" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
