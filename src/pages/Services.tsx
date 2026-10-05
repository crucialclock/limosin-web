/* eslint-disable react-refresh/only-export-components */
import { ArrowRight, BadgeCheck, CheckCircle2, CircleCheckBig, Clock, FileText, Globe, Layers3, MessageSquare, MonitorCog, PenTool, Rocket, Sparkles, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

export type Plan = {
    slug: string;
    name: string;
    audience: string;
    summary: string;
    timeline: string;
    icon: LucideIcon;
    featured?: boolean;
    includes: string[];
};

export type DetailGroup = {
    title: string;
    icon: LucideIcon;
    items: string[];
};

type InfoSectionProps = {
    title: string;
    items: string[];
    icon: LucideIcon;
    iconColorClass: string;
};

export const plans: Plan[] = [
    {
        slug: "pagina-simples",
        name: "Pagina Simples",
        audience: "Uma pagina direta para apresentar uma ideia, um servico ou uma novidade.",
        summary: "E o caminho mais rapido para colocar algo bonito no ar, com texto claro e contato facil.",
        timeline: "5 a 10 dias uteis",
        icon: Rocket,
        featured: true,
        includes: ["Uma pagina responsiva", "Texto organizado com voce", "Blocos para explicar o que importa", "Botoes para WhatsApp e e-mail", "Publicacao com dominio, seguranca e hospedagem"],
    },
    {
        slug: "site-simples",
        name: "Site Simples",
        audience: "Para negocios que precisam explicar quem sao, o que fazem e como entrar em contato.",
        summary: "Um site sem exagero, com as paginas essenciais para sua marca existir melhor online.",
        timeline: "10 a 20 dias uteis",
        icon: Globe,
        includes: ["Inicio, sobre, servicos e contato", "Texto facil de ler", "Visual alinhado ao negocio", "Organizacao para aparecer melhor nas buscas", "Botao de WhatsApp e links importantes"],
    },
    {
        slug: "pagina-de-divulgacao",
        name: "Pagina de Divulgacao",
        audience: "Para anunciar uma novidade, evento, lista de espera ou campanha pontual.",
        summary: "Uma pagina com começo, meio e chamada clara para quem acessa entender o proximo passo.",
        timeline: "5 a 15 dias uteis",
        icon: Sparkles,
        includes: ["Estrutura para divulgar uma novidade", "Blocos de beneficios e duvidas comuns", "Chamada principal bem visivel", "Mensagem pronta para WhatsApp", "Ajustes finais antes de publicar"],
    },
    {
        slug: "portfolio-profissional",
        name: "Portfolio Profissional",
        audience: "Para profissionais, estudios e pequenos negocios mostrarem trabalhos.",
        summary: "Um lugar simples para reunir trabalhos, historia, servicos e formas de contato.",
        timeline: "7 a 18 dias uteis",
        icon: FileText,
        includes: ["Apresentacao profissional", "Galeria de trabalhos", "Servicos ou areas de atuacao", "Depoimentos ou destaques", "Contato direto por WhatsApp/e-mail"],
    },
    {
        slug: "ajustes-e-manutencao",
        name: "Ajustes em Site",
        audience: "Para quem ja tem uma pagina e quer melhorar texto, visual ou organizacao.",
        summary: "Pequenas melhorias para deixar o site mais claro, bonito e agradavel de usar.",
        timeline: "Sob consulta",
        icon: PenTool,
        includes: ["Ajustes de texto e ordem das secoes", "Melhorias no celular", "Troca de imagens e blocos", "Revisao de links e botoes", "Pequenas correcoes visuais"],
    },
    {
        slug: "projeto-especial",
        name: "Ideia Maior",
        audience: "Quando a necessidade passa de uma pagina simples e precisa ser entendida com calma.",
        summary: "Se o que voce quer ainda nao cabe em uma opcao pronta, a gente conversa e desenha o caminho juntos.",
        timeline: "Conversar",
        icon: Layers3,
        includes: ["Conversa para entender a ideia", "Definicao do que realmente precisa existir", "Proposta sob medida", "Prioridades bem combinadas", "Entrega por etapas quando fizer sentido"],
    },
];

export const detailGroups: DetailGroup[] = [
    {
        title: "Texto",
        icon: MessageSquare,
        items: ["Ideia bem explicada", "Texto facil de ler", "Convites para contato"],
    },
    {
        title: "Design",
        icon: PenTool,
        items: ["Visual responsivo", "Ordem clara das informacoes", "Imagens bem preparadas"],
    },
    {
        title: "Publicar",
        icon: Globe,
        items: ["Site no ar", "Dominio e seguranca", "Links de WhatsApp/e-mail"],
    },
    {
        title: "Cuidado",
        icon: MonitorCog,
        items: ["Carregamento leve", "Organizacao para buscas", "Boa leitura no celular"],
    },
];

export const maintenanceIncludes = [
    "<strong>Hospedagem</strong> para manter a pagina publicada.",
    "<strong>Seguranca basica</strong> para o site abrir com HTTPS.",
    "<strong>Ajustes pontuais</strong> de textos, imagens, links e pequenos blocos.",
    "<strong>Acompanhamento basico</strong> para perceber problemas de publicacao.",
    "<strong>Suporte por WhatsApp/e-mail</strong> para duvidas e pequenas correcoes.",
];

export const maintenanceExcludes = [
    "<strong>Areas com senha</strong>, paineis administrativos ou cadastro de usuarios.",
    "<strong>Funcionalidades internas</strong> que precisam guardar e gerenciar dados.",
    "<strong>Ligacoes complexas</strong> com outras ferramentas ou plataformas.",
    "<strong>Novas paginas grandes</strong> criadas depois da entrega inicial.",
    "<strong>Redesign completo</strong> fora do escopo combinado.",
];

export const supportItems = [
    "<strong>Atendimento regular:</strong> segunda a sexta, das 09h as 18h.",
    "<strong>Pedidos pequenos:</strong> retorno em ate 2 dias uteis.",
    "<strong>Publicacao:</strong> acompanhamento ate o site ficar no ar.",
    "<strong>Ideias maiores:</strong> avaliadas em conversa antes de qualquer proposta.",
];

function planHref(slug: string) {
    return `/contato?solucao=${slug}`;
}

function PlanCard({ plan }: { plan: Plan }) {
    const Icon = plan.icon;

    return (
        <article className={`group relative flex h-full w-full flex-col overflow-hidden rounded-3xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7 ${plan.featured ? "border-yellow-400 bg-neutral-900" : "theme-surface theme-border bg-white"}`}>
            <div className={`pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-br via-transparent to-transparent opacity-10 transition-opacity duration-300 group-hover:opacity-15 ${plan.featured ? "from-yellow-400" : "from-yellow-500"}`} />

            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                    <div className={`w-fit rounded-xl p-2.5 ${plan.featured ? "bg-white/10 text-yellow-400" : "bg-yellow-400/10 text-yellow-600"}`}>
                        <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </div>

                    <span className={`type-chip w-fit rounded-full px-3 py-1 ${plan.featured ? "bg-white/10 text-white/70" : "bg-neutral-100 theme-text-muted"}`}>{plan.timeline}</span>
                </div>

                <div className="mt-5 sm:mt-6">
                    <h2 className={`type-section-title ${plan.featured ? "text-white" : "theme-text-primary"}`}>{plan.name}</h2>
                    <p className={`mt-2 text-sm font-semibold leading-relaxed ${plan.featured ? "text-white/60" : "theme-text-muted"}`}>{plan.audience}</p>
                    <p className={`mt-4 text-sm leading-relaxed ${plan.featured ? "text-white/80" : "theme-text-secondary"}`}>{plan.summary}</p>
                </div>

                <ul className={`mt-5 flex-1 space-y-3 border-t pt-4 sm:mt-6 sm:pt-5 ${plan.featured ? "border-white/10" : "theme-border"}`}>
                    {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                            <CircleCheckBig className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-yellow-400" : "text-yellow-500"}`} strokeWidth={2.2} />
                            <span className={`text-sm leading-relaxed ${plan.featured ? "text-white/80" : "theme-text-secondary"}`}>{item}</span>
                        </li>
                    ))}
                </ul>

                <Link to={planHref(plan.slug)} className={`type-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 transition-all duration-300 hover:scale-[1.01] sm:mt-7 ${plan.featured ? "bg-yellow-400 text-neutral-950 hover:bg-yellow-500" : "theme-cta-primary"}`}>
                    Conversar sobre esta ideia
                    <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                </Link>
            </div>
        </article>
    );
}

function DetailCard({ group }: { group: DetailGroup }) {
    const Icon = group.icon;

    return (
        <article className="theme-surface theme-border flex h-full min-h-40 flex-col rounded-3xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:min-h-43 sm:p-6">
            <div className="flex items-center gap-3">
                <div className="rounded-xl bg-yellow-400/10 p-2 text-yellow-600">
                    <Icon className="h-5 w-5" strokeWidth={2.2} />
                </div>

                <h4 className="theme-text-primary type-card-title">{group.title}</h4>
            </div>

            <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                    <li key={item} className="theme-text-secondary flex items-start gap-3 text-sm leading-relaxed">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" strokeWidth={2.2} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

function InfoSection({ title, items, icon: Icon, iconColorClass }: InfoSectionProps) {
    return (
        <article className="theme-surface theme-border flex h-full flex-col rounded-3xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7">
            <h3 className="theme-text-primary theme-border type-card-title border-b pb-4">{title}</h3>

            <ul className="mt-5 grid gap-3.5">
                {items.map((item, index) => (
                    <li key={index} className="theme-text-secondary flex items-start gap-3 text-sm leading-relaxed">
                        <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${iconColorClass}`} strokeWidth={2.2} />
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function Services() {
    return (
        <main className="theme-page relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-start overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="home-dot-grid absolute inset-0 opacity-70" />
                <div className="theme-support-soft absolute top-16 -right-32 h-72 w-72 rounded-full opacity-40 blur-[110px]" />
                <div className="theme-accent-soft absolute -bottom-36 left-12 h-80 w-80 rounded-full opacity-30 blur-[120px]" />
            </div>

            <section className="page-shell relative z-10 pt-10 sm:pt-16 lg:pt-16">
                <div className="flex w-full flex-col justify-start">
                    <h1 className="theme-text-primary page-title-display max-w-5xl lg:text-[clamp(4.6rem,5.6vw,5rem)]">
                        Uma pagina clara
                        <br />para o seu negocio.
                    </h1>

                    <div className="mt-5 flex flex-col gap-5 sm:mt-7 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <p className="theme-text-secondary max-w-2xl text-base leading-relaxed font-medium sm:text-lg">A Limosin cria paginas e sites simples para quem precisa se apresentar melhor na internet. Sem exagero, sem sistema escondido, sem empurrar complexidade onde uma boa pagina resolve.</p>

                        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center lg:w-auto">
                            <Link to="/contato" className="theme-cta-primary type-button inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-8 py-4 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg sm:w-auto sm:px-10">
                                Conversar sobre minha pagina
                                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-shell relative z-10 py-8 sm:py-10 lg:py-12">
                <div className="mb-3 flex items-center justify-between gap-3 lg:hidden">
                    <p className="theme-text-muted type-chip">Arraste para o lado</p>
                    <span className="theme-text-muted text-base" aria-hidden="true">-&gt;</span>
                </div>

                <div className="relative">
                    <div className="mobile-chip-row -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 overscroll-x-contain scroll-smooth sm:-mx-8 sm:gap-5 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
                        {plans.map((plan) => (
                            <div key={plan.slug} className="flex w-[88vw] max-w-97.5 shrink-0 snap-center justify-center first:pl-0 sm:w-[46vw] sm:max-w-105 lg:w-auto lg:max-w-none lg:shrink lg:snap-none">
                                <PlanCard plan={plan} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-shell relative z-10 py-6">
                <div className="theme-surface theme-border rounded-3xl border p-5 shadow-xs sm:p-8">
                    <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-start gap-3">
                            <div className="rounded-xl bg-yellow-400/10 p-2 text-yellow-600">
                                <MessageSquare className="h-5 w-5" strokeWidth={2.2} />
                            </div>

                            <div>
                                <h2 className="theme-text-primary type-section-title sm:text-lg">O que entra no trabalho</h2>
                                <p className="theme-text-muted mt-1 max-w-2xl text-sm leading-relaxed">O foco e colocar uma presenca clara no ar, sem transformar uma pagina simples em um sistema.</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                        {detailGroups.map((group) => (
                            <DetailCard key={group.title} group={group} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-shell relative z-10 py-10 pb-20 sm:py-12 lg:py-16 lg:pb-24">
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    <InfoSection title="Cuidados incluidos" items={maintenanceIncludes} icon={CheckCircle2} iconColorClass="text-emerald-500" />
                    <InfoSection title="O que vira outra conversa" items={maintenanceExcludes} icon={XCircle} iconColorClass="text-red-500" />
                    <InfoSection title="Suporte" items={supportItems} icon={Clock} iconColorClass="text-yellow-500" />
                </div>
            </section>
        </main>
    );
}
