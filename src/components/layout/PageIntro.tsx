import { Link } from "react-router-dom";
import PageBackground from "../brand/PageBackground";

    type PageIntroProps = {
        description: string;
        eyebrow: string;
        primaryHref?: string;
        primaryLabel?: string;
        secondaryHref?: string;
        secondaryLabel?: string;
        title: string;
    };

    export default function PageIntro({ eyebrow, title, description, primaryHref = "/contato", primaryLabel = "Falar com a Limosin", secondaryHref = "/", secondaryLabel = "Voltar para a home" }: PageIntroProps) {
        return (
            <main className="theme-page brand-page-bg relative overflow-hidden">
                <PageBackground />

                <div className="page-shell relative grid grid-cols-1 items-start gap-10 pt-10 pb-20 sm:pt-16 sm:pb-24 lg:grid-cols-12 lg:gap-8 lg:pt-16 lg:pb-28">
                    <div className="flex max-w-4xl flex-col justify-start lg:col-span-7">
                        <span className="sr-only">{eyebrow}</span>
                        <h1 className="theme-text-primary page-title-display max-w-4xl lg:text-[clamp(3.8rem,5vw,4.55rem)]">{title}</h1>

                        <p className="theme-text-secondary mt-5 max-w-2xl text-base font-medium leading-relaxed sm:mt-7 sm:text-lg">{description}</p>

                        <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
                            <Link to={primaryHref} className="theme-cta-primary type-button inline-flex w-full items-center justify-center rounded-xl px-7 py-4 sm:w-auto">
                                {primaryLabel}
                            </Link>

                            <Link to={secondaryHref} className="theme-link-accent type-button inline-flex justify-center underline underline-offset-4 sm:justify-start">
                                {secondaryLabel}
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
