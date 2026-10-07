import { ArrowRight, BadgeCheck, CircleCheckBig } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import PageBackground from "../components/brand/PageBackground";
import { SEO } from "../components/seo/SEO";

import { briefingGuidelines, solutionLabels } from "../features/contact/contact.constants";
import { buildWhatsappUrl } from "../features/contact/contact.service";
import { trackEvent } from "../services/analytics";

const contactDescription = "Fale com a Limosin pelo WhatsApp para conversar sobre criação de sites, landing pages e presença digital para o seu negócio.";
const whatsappDisplayNumber = "(11) 99128-0957";

export default function Contact() {
    const [searchParams] = useSearchParams();

    const solutionSlug = searchParams.get("solucao") ?? "";
    const selectedSolution = solutionLabels[solutionSlug];
    const whatsappUrl = buildWhatsappUrl(selectedSolution);

    return (
        <main className="theme-page brand-page-bg relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-start overflow-hidden">
            <SEO title="Contato para Criação de Sites | Limosin" description={contactDescription} canonicalPath="/contato" />
            <PageBackground />

            <section className="page-shell relative z-10 py-10 pb-20 sm:py-16 sm:pb-24 lg:py-16 lg:pb-28">
                <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.64fr)] lg:items-start lg:gap-10">
                    <div className="flex flex-col justify-start">
                        <h1 className="theme-text-primary page-title-display max-w-4xl lg:text-[clamp(3.8rem,5vw,4.55rem)]">Fale conosco</h1>

                        <p className="theme-text-secondary mt-5 max-w-2xl text-base leading-relaxed font-medium sm:mt-7 sm:text-lg">Conte para a Limosin o que você quer construir. Pode ser uma página nova, um site simples ou uma ideia que ainda está tomando forma.</p>

                        <div className="theme-surface theme-border relative mt-8 max-w-2xl overflow-hidden rounded-xl border p-5 shadow-xs sm:p-7 lg:mt-10">
                            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-45 border border-(--color-accent)/35" />

                            <div className="relative z-10">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h2 className="theme-text-primary type-section-title mt-3">O que ajuda na primeira conversa.</h2>
                                    </div>

                                    <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--color-accent) text-(--color-brand-black) sm:flex">
                                        <BadgeCheck className="h-5 w-5" strokeWidth={1.75} />
                                    </div>
                                </div>

                                <ul className="theme-border mt-6 grid gap-3 border-t pt-5">
                                    {briefingGuidelines.map((item) => (
                                        <li key={item} className="theme-text-secondary flex items-start gap-3 text-sm leading-relaxed">
                                            <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-(--color-brand-black)" strokeWidth={1.75} />
                                            <span dangerouslySetInnerHTML={{ __html: item }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {selectedSolution && (
                            <div className="mt-8 max-w-2xl rounded-xl border border-(--color-accent)/35 bg-(--color-accent-soft) p-4">
                                <p className="theme-text-muted type-chip">Interesse selecionado</p>
                                <p className="theme-text-primary type-card-title mt-2">{selectedSolution}</p>
                            </div>
                        )}
                    </div>

                    <div className="theme-surface theme-border rounded-xl border p-5 shadow-(--shadow-surface) sm:p-8 lg:sticky lg:top-24">
                        <h2 className="theme-text-primary type-section-title">Vamos conversar?</h2>
                        <p className="theme-text-secondary mt-2 text-sm leading-relaxed">O WhatsApp costuma ser o jeito mais rápido de alinhar a ideia e entender o melhor próximo passo.</p>

                        <div className="mt-6 rounded-xl border border-(--color-accent)/35 bg-(--color-accent-soft) p-4">
                            <p className="theme-text-muted type-chip">WhatsApp</p>
                            <p className="theme-text-primary mt-2 inline-flex items-center gap-2 text-lg font-semibold tracking-normal">
                                <FaWhatsapp className="h-5 w-5 shrink-0 text-(--color-brand-black)" />
                                {whatsappDisplayNumber}
                            </p>
                        </div>

                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("click_whatsapp")} className="theme-cta-primary type-button group mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl px-8 py-4 transition-all duration-500 ease-in-out hover:scale-[1.02]">
                            <FaWhatsapp className="h-5 w-5" />
                            Chamar no WhatsApp
                            <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-in-out group-hover:translate-x-1.5" strokeWidth={1.75} />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
