import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import BrandShape from "../components/brand/BrandShape";
import PageBackground from "../components/brand/PageBackground";
import { fadeUp, softScale, staggerContainer } from "../components/home/motionPresets";

export default function Home() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
    return (
        <main className="theme-page brand-page-bg relative min-h-[calc(100vh-72px)] overflow-hidden">
            <PageBackground />

            <section className="relative z-10 w-full">
                <div className="page-shell grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-18 lg:grid-cols-12 lg:gap-10 lg:py-0">
                    <motion.div className="flex flex-col justify-center lg:col-span-6" variants={staggerContainer} initial={initial} animate={animate}>
                        <motion.h1 className="theme-text-primary page-title-display max-w-4xl lg:text-[clamp(3.8rem,5vw,4.55rem)]" variants={fadeUp}>
                            <span className="whitespace-nowrap">Sua marca bem</span>
                            <br />
                            <span className="hero-title-mark inline-block whitespace-nowrap">representada.</span>
                        </motion.h1>

                        <div className="mt-5 max-w-2xl space-y-4 sm:mt-7">
                            <motion.p className="theme-text-secondary text-base leading-relaxed font-medium sm:text-lg" variants={fadeUp}>
                                A Limosin ajuda empresas e profissionais a construírem uma presença digital sólida, que transmite profissionalismo e representa a essência de cada negócio.
                            </motion.p>
                        </div>

                        <motion.div className="mt-7 flex w-full flex-col gap-3.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-6" variants={fadeUp}>
                            <Link to="/contato" className="theme-cta-primary type-button group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl px-8 py-4 transition-all duration-500 ease-in-out hover:scale-[1.02] sm:w-auto sm:px-10">
                                <span className="relative z-10 flex items-center gap-2">
                                    Entre em contato
                                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5" strokeWidth={1.8} />
                                </span>
                            </Link>

                            <Link to="/servicos" className="theme-border theme-text-secondary type-button inline-flex w-full cursor-pointer items-center justify-center rounded-xl border px-8 py-4 transition-colors hover:bg-(--color-brand-black) hover:text-(--color-brand-cream) sm:w-auto">
                                Ver serviços
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative mx-auto w-full max-w-105 pb-6 sm:max-w-130 sm:pb-12 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:max-w-none lg:pb-0" variants={staggerContainer} initial={initial} animate={animate}>
                        <BrandShape type="triangle" className="pointer-events-none absolute -top-8 -left-12 z-0 hidden md:block" color="rgba(255,214,44,.2)" size="5.5rem" />
                        <BrandShape type="diamond" className="pointer-events-none absolute top-24 -right-8 z-0 hidden h-20 w-20 md:block" color="rgba(21,21,21,.07)" />

                        <motion.div className="theme-border relative z-10 mx-auto aspect-[1.18] w-full cursor-pointer overflow-hidden rounded-xl border bg-(--color-canvas-strong) shadow-(--shadow-surface) sm:aspect-3/4 sm:max-w-85 lg:mr-0 lg:ml-auto lg:rotate-1" variants={softScale}>
                            <img src="https://images.pexels.com/photos/19354252/pexels-photo-19354252.jpeg" alt="Elemento gráfico abstrato" className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105" />
                        </motion.div>

                        <motion.div
                            className="theme-border relative z-20 mx-auto -mt-12 aspect-16/10 w-[82%] cursor-pointer overflow-hidden rounded-xl border bg-(--color-canvas-strong) shadow-(--shadow-surface) transition-transform duration-500 ease-in-out hover:scale-[1.02] sm:absolute sm:-bottom-12 sm:-left-8 sm:mt-0 sm:aspect-square sm:w-52 lg:-left-14 lg:w-56 lg:-rotate-2"
                            variants={softScale}
                        >
                            <img src="https://images.pexels.com/photos/11295023/pexels-photo-11295023.jpeg" alt="Textura abstrata" className="h-full w-full object-cover" />
                        </motion.div>

                        <motion.div className="theme-surface group relative z-30 mx-auto -mt-1 max-w-52 cursor-pointer rounded-xl border px-4 py-4 shadow-(--shadow-surface) transition-all duration-500 ease-in-out hover:-translate-y-1 sm:absolute sm:top-12 sm:left-2 sm:mx-0 sm:mt-0 sm:max-w-44 sm:px-5 sm:py-5 lg:-left-6 lg:max-w-48" variants={softScale}>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 bg-(--color-accent) transition-transform duration-500 ease-in-out group-hover:scale-110" />
                                <p className="theme-text-muted type-chip">limosin</p>
                            </div>
                            <p className="theme-text-primary mt-2.5 text-sm leading-snug font-semibold">Extraia o seu melhor.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
