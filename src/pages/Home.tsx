import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import PageBackground from "../components/brand/PageBackground";
import { fadeUp, softScale, staggerContainer } from "../components/home/motionPresets";
import { SEO } from "../components/seo/SEO";
import { siteConfig } from "../config/site";

const homeDescription = siteConfig.defaultDescription;
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}${siteConfig.logoUrl}`,
    description: siteConfig.defaultDescription,
    email: siteConfig.contactEmail,
    telephone: `+${siteConfig.whatsappNumber}`,
    sameAs: [siteConfig.instagramUrl],
};

export default function Home() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";

    return (
        <main className="theme-page brand-page-bg relative min-h-[calc(100vh-72px)] overflow-hidden">
            <SEO title="Criação de Sites para Empresas | Limosin" description={homeDescription} canonicalPath="/" schema={organizationSchema} />
            <PageBackground />

            <section className="relative z-10 w-full">
                <div className="page-shell grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-10 py-10 sm:py-14 lg:grid-cols-12 lg:gap-10 lg:py-8">
                    <motion.div className="flex flex-col justify-center lg:col-span-6" variants={staggerContainer} initial={initial} animate={animate}>
                        <motion.h1 className="theme-text-primary page-title-display max-w-[42rem] lg:text-[clamp(3.5rem,4.8vw,4.55rem)]" variants={fadeUp}>
                            <span className="whitespace-nowrap">Sua marca bem</span>
                            <br />
                            <span className="hero-title-mark inline-block whitespace-nowrap">representada.</span>
                        </motion.h1>

                        <div className="mt-5 max-w-[34rem] sm:mt-6">
                            <motion.p className="theme-text-secondary text-base leading-relaxed font-medium sm:text-lg" variants={fadeUp}>
                                A Limosin ajuda empresas e profissionais a construírem uma presença digital sólida, que transmite profissionalismo e representa a essência de cada negócio.
                            </motion.p>
                        </div>

                        <motion.div className="mt-7 flex w-full flex-col gap-3.5 sm:mt-8 sm:flex-row sm:items-center sm:gap-5" variants={fadeUp}>
                            <Link to="/contato" className="theme-cta-primary type-button group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl px-8 py-4 transition-all duration-500 ease-in-out hover:scale-[1.02] sm:w-auto sm:px-10">
                                <span className="relative z-10 flex items-center gap-2">
                                    Entre em contato
                                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5" strokeWidth={1.8} />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative mx-auto w-full max-w-[38rem] lg:col-span-6 lg:col-start-7 lg:max-w-none" variants={staggerContainer} initial={initial} animate={animate}>
                        <motion.div className="theme-surface theme-border relative overflow-hidden rounded-xl border p-3 shadow-(--shadow-surface) sm:p-4 lg:p-5" variants={softScale}>
                            <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full border border-(--color-accent)/35 bg-(--color-accent-soft)" />

                            <div className="relative z-10 grid items-end gap-3 sm:grid-cols-[minmax(0,1fr)_11rem] sm:gap-4 lg:grid-cols-[minmax(0,1fr)_12rem]">
                                <div className="grid gap-3">
                                    <div className="theme-border aspect-[1.35] overflow-hidden rounded-xl border bg-(--color-canvas-strong)">
                                        <img src="/home-hero-primary.webp" alt="Elemento gráfico abstrato" width="672" height="855" className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105" />
                                    </div>

                                    <Link to="/servicos" className="theme-border theme-text-secondary type-button inline-flex min-h-13 w-full cursor-pointer items-center justify-center rounded-xl border bg-(--color-canvas)/55 px-8 py-3.5 transition-colors hover:bg-(--color-brand-black) hover:text-(--color-brand-cream)">
                                        Ver serviços
                                    </Link>
                                </div>

                                <div className="grid gap-3">
                                    <div className="theme-border rounded-xl border bg-(--color-canvas) p-4 shadow-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="h-1.5 w-1.5 bg-(--color-accent)" />
                                            <p className="theme-text-muted type-chip">digital</p>
                                        </div>
                                        <p className="theme-text-primary mt-2.5 text-sm leading-snug font-semibold">Estrutura, visual e contato no lugar certo.</p>
                                    </div>

                                    <div className="theme-border aspect-[1.1] overflow-hidden rounded-xl border bg-(--color-canvas-strong)">
                                        <img src="/home-hero-secondary.webp" alt="Textura abstrata" width="416" height="416" loading="lazy" className="h-full w-full object-cover" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
