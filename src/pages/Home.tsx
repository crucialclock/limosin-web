import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { fadeUp, motionTokens, slowFloat, softScale, staggerContainer } from "../components/home/motionPresets";

export default function Home() {
    const shouldReduceMotion = useReducedMotion();
    const initial = shouldReduceMotion ? undefined : "hidden";
    const animate = shouldReduceMotion ? undefined : "visible";
    const floatingProps = shouldReduceMotion ? {} : slowFloat;

    const alternateFloat = shouldReduceMotion
        ? {}
        : {
              animate: {
                  y: [0, 6, 0],
                  transition: {
                      duration: 11,
                      repeat: Infinity,
                      repeatType: "reverse" as const,
                      ease: motionTokens.easeStandard,
                  },
              },
          };

    return (
        <main className="theme-page relative min-h-[calc(100vh-72px)] overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="home-dot-grid absolute inset-0 opacity-70" />
                <div className="theme-support-soft absolute top-16 -right-32 h-72 w-72 rounded-full opacity-40 blur-[110px]" />
                <div className="theme-accent-soft absolute -bottom-36 left-12 h-80 w-80 rounded-full opacity-30 blur-[120px]" />

                <motion.div className="lemon-border-yellow absolute top-[18%] left-[6%] h-12 w-12 rounded-full border sm:h-14 sm:w-14" {...floatingProps} />
                <div className="lemon-text-green absolute top-[45%] left-[4%] hidden select-none font-mono text-xl opacity-60 md:block">+</div>
                <div className="lemon-dot-green absolute top-[28%] left-[15%] hidden h-2 w-2 rounded-full opacity-50 md:block" />
                <div className="lemon-border-zinc absolute top-[12%] left-[22%] hidden h-5 w-5 rotate-12 border opacity-40 md:block" />
                <div className="lemon-border-zinc absolute top-[22%] left-[38%] hidden h-8 w-8 rotate-45 border opacity-30 md:block" />
                <div className="lemon-dot-green absolute top-[65%] left-[32%] hidden h-1.5 w-1.5 rounded-full opacity-40 md:block" />
                <div className="lemon-text-yellow-light absolute bottom-[20%] left-[48%] hidden select-none font-mono text-lg opacity-40 md:block">+</div>
                <motion.div className="lemon-border-green absolute right-[8%] bottom-[16%] h-14 w-14 rounded-full border sm:h-20 sm:w-20" {...alternateFloat} />
                <div className="lemon-border-yellow-light absolute top-[10%] right-[18%] h-5 w-5 rotate-135 border opacity-70" />
                <div className="lemon-border-green absolute top-[38%] right-[6%] hidden h-7 w-7 rotate-12 border opacity-40 md:block" />
                <div className="lemon-dot-yellow absolute top-[25%] right-[28%] hidden h-2 w-2 rounded-full opacity-40 md:block" />
                <div className="lemon-text-yellow-light absolute right-[14%] bottom-[38%] hidden select-none font-mono text-xl opacity-50 md:block">+</div>
            </div>

            <section className="relative z-10 w-full">
                <div className="page-shell grid min-h-[calc(100vh-72px)] grid-cols-1 items-center gap-8 py-10 sm:gap-10 sm:py-16 lg:grid-cols-12 lg:gap-8 lg:py-0">
                    <motion.div className="flex flex-col justify-center lg:col-span-6" variants={staggerContainer} initial={initial} animate={animate}>
                        <motion.div className="mb-5 flex items-center gap-3 sm:mb-7 lg:mb-8" variants={fadeUp}>
                            <div className="theme-accent-fill h-2 w-2 shrink-0 rounded-full" />
                            <span className="theme-text-muted type-eyebrow">Soluções para negócios reais</span>
                        </motion.div>

                        <motion.h1 className="theme-text-primary page-title-display max-w-[10.5ch] sm:max-w-none lg:text-[clamp(4.6rem,5.6vw,5rem)]" variants={fadeUp}>
                            Sua marca bem
                            <br />
                            <span className="hero-title-mark inline-block whitespace-nowrap">representada.</span>
                        </motion.h1>
                        <div className="mt-7 max-w-xl space-y-4 sm:mt-8">
                            <motion.p className="theme-text-secondary text-justify text-base leading-relaxed font-medium sm:text-lg" variants={fadeUp}>
                                A Limosin ajuda empresas e profissionais a construírem uma presença digital sólida, que transmite profissionalismo e representa a essência de cada negócio.
                            </motion.p>
                        </div>

                        <motion.div className="mt-7 flex w-full flex-col gap-3.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-6" variants={fadeUp}>
                            <Link to="/contato" className="theme-cta-primary type-button group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-8 py-4 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:px-10">
                                <span className="relative z-10 flex items-center gap-2">
                                    Entre em contato
                                    <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5" strokeWidth={2.25} />
                                </span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div className="relative mx-auto w-full max-w-105 pb-6 sm:max-w-130 sm:pb-12 lg:col-span-5 lg:col-start-8 lg:mt-0 lg:max-w-none lg:pb-0" variants={staggerContainer} initial={initial} animate={animate}>
                        <div className="theme-accent-soft pointer-events-none absolute -top-8 -right-8 h-32 w-32 rounded-4xl blur-2xl sm:h-40 sm:w-40" />
                        <div className="theme-support-soft pointer-events-none absolute bottom-10 -left-8 h-28 w-28 rounded-full blur-2xl sm:h-32 sm:w-32" />
                        <div className="lemon-border-yellow pointer-events-none absolute -top-8 left-8 z-0 hidden h-12 w-12 rounded-full border sm:block" />
                        <div className="lemon-border-green pointer-events-none absolute top-24 right-0 z-0 hidden h-8 w-8 rotate-45 border sm:block lg:-right-8" />

                        <motion.div className="theme-border relative z-10 mx-auto aspect-[1.18] w-full cursor-pointer overflow-hidden rounded-[1.75rem] border bg-[color-mix(in_srgb,var(--color-canvas-strong)_72%,white)] shadow-2xl sm:aspect-3/4 sm:max-w-85 sm:rounded-4xl lg:mr-0 lg:ml-auto" variants={softScale}>
                            <img src="https://images.pexels.com/photos/19354252/pexels-photo-19354252.jpeg" alt="Elemento grafico abstrato" className="h-full w-full object-cover transition-transform duration-700 ease-in-out hover:scale-105" />
                        </motion.div>

                        <motion.div
                            className="theme-border relative z-20 mx-auto -mt-12 aspect-16/10 w-[82%] cursor-pointer overflow-hidden rounded-[1.5rem] border bg-[color-mix(in_srgb,var(--color-canvas-strong)_72%,white)] shadow-2xl transition-transform duration-500 ease-in-out hover:scale-[1.02] sm:absolute sm:-bottom-12 sm:-left-8 sm:mt-0 sm:aspect-square sm:w-52 sm:rounded-4xl lg:-left-14 lg:w-56"
                            variants={softScale}
                        >
                            <img src="https://images.pexels.com/photos/11295023/pexels-photo-11295023.jpeg" alt="Textura tecnologica" className="h-full w-full object-cover" />
                        </motion.div>

                        <motion.div className="theme-surface group relative z-30 mx-auto -mt-1 max-w-52 cursor-pointer rounded-2xl border px-4 py-4 shadow-xl transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl sm:absolute sm:top-12 sm:left-2 sm:mx-0 sm:mt-0 sm:max-w-44 sm:px-5 sm:py-5 lg:-left-6 lg:max-w-48" variants={softScale}>
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent,#eab308) transition-transform duration-500 ease-in-out group-hover:scale-110" />
                                <p className="theme-text-muted type-chip">limosin</p>
                            </div>
                            <p className="theme-text-primary mt-2.5 text-sm leading-snug font-bold tracking-tight">Extraia o Seu Melhor.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
