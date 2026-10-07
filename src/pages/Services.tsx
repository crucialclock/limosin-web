import { ArrowRight, BadgeCheck, CheckCircle2, CircleCheckBig, Clock, Globe, Layers3, MessageSquare, PenTool, Rocket, Search, ShieldCheck, XCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageBackground from "../components/brand/PageBackground";
import { buildWhatsappUrl } from "../features/contact/contact.service";

type ServicePlan = {
    slug: string;
    name: string;
    timeline: string;
    description: string;
    icon: LucideIcon;
    featured?: boolean;
    included: string[];
    cta: string;
};

type InfoGroup = {
    title: string;
    subtitle?: string;
    description?: string;
    icon: LucideIcon;
    items: string[];
};

const servicePlans: ServicePlan[] = [
    {
        slug: "landing-page",
        name: "Landing Page",
        timeline: "5 a 10 dias úteis",
        description: "Uma página focada em apresentar uma oferta e transformar interesse em contato.",
        icon: Rocket,
        included: ["Estrutura completa da página", "Design responsivo para celular e computador", "Conteúdo organizado a partir das informações do negócio", "Seções e chamadas pensadas para levar ao contato", "Integração com WhatsApp e outros canais", "Configuração básica para aparecer nas pesquisas", "Domínio e hospedagem", "Publicação e configuração final"],
        cta: "Quero uma Landing Page",
    },
    {
        slug: "site-institucional",
        name: "Site Institucional",
        timeline: "10 a 20 dias úteis",
        description: "Para apresentar seu negócio com mais espaço, organização e presença profissional na internet.",
        icon: Globe,
        featured: true,
        included: [
            "Estrutura com múltiplas páginas",
            "Design responsivo para celular e computador",
            "Organização dos serviços e informações da empresa",
            "Página inicial e páginas institucionais",
            "Área de contato e integração com WhatsApp",
            "Estrutura preparada para portfólio quando necessário",
            "Configuração básica para aparecer nas pesquisas",
            "Domínio e hospedagem",
            "Publicação e configuração final",
        ],
        cta: "Quero um Site Institucional",
    },
    {
        slug: "outra-ideia",
        name: "Outras ideias",
        timeline: "Sob consulta",
        description: "Para projetos que não começam em um formato pronto e precisam ser entendidos antes da proposta.",
        icon: Layers3,
        included: ["Conversa para entender a necessidade", "Definição do objetivo do projeto", "Organização do que precisa ser desenvolvido", "Escopo combinado antes da proposta", "Proposta sob medida"],
        cta: "Conversar sobre minha ideia",
    },
];

const projectBase: InfoGroup[] = [
    {
        title: "Conteúdo",
        subtitle: "Informação bem apresentada.",
        icon: MessageSquare,
        items: ["Organização dos textos enviados pelo cliente", "Hierarquia clara das informações", "Chamadas para contato", "Conteúdo fácil de entender e navegar"],
    },
    {
        title: "Design",
        subtitle: "Uma presença alinhada ao seu negócio.",
        icon: PenTool,
        items: ["Visual responsivo", "Experiência adaptada para celular", "Organização visual das informações", "Uso dos materiais e identidade fornecidos pelo cliente"],
    },
    {
        title: "Publicação",
        subtitle: "Tudo preparado para entrar no ar.",
        icon: ShieldCheck,
        items: ["Domínio incluído no projeto", "Hospedagem", "HTTPS e configuração básica de segurança", "Publicação acompanhada", "Links de contato configurados"],
    },
    {
        title: "Presença nas pesquisas",
        subtitle: "Uma base técnica para o Google encontrar seu site.",
        icon: Search,
        items: ["Estrutura preparada para indexação", "Títulos e descrições das páginas", "Organização semântica do conteúdo", "Sitemap e configurações técnicas de SEO", "Boa leitura e desempenho no celular"],
    },
];

const afterDelivery: InfoGroup[] = [
    {
        title: "Ajustes finais",
        description: "Antes de encerrar o projeto, fazemos os últimos ajustes combinados.",
        icon: CheckCircle2,
        items: ["Textos", "Imagens", "Links", "Pequenos detalhes visuais"],
    },
    {
        title: "Suporte",
        description: "Depois da publicação, você continua tendo um canal de contato com a Limosin.",
        icon: Clock,
        items: ["Atendimento em horário comercial", "Dúvidas e pequenas correções por WhatsApp ou e-mail", "Problemas relacionados à publicação e hospedagem", "Novas funcionalidades e alterações maiores avaliadas separadamente"],
    },
];

const outOfScopeItems = ["Sistemas com login ou área restrita", "Painéis administrativos", "Cadastro e gerenciamento de usuários", "Sistemas internos", "E-commerce", "Integrações complexas com plataformas externas", "Funcionalidades específicas de software", "Grandes alterações depois da entrega", "Redesign completo fora do escopo aprovado"];

function whatsappHref(label: string) {
    return buildWhatsappUrl(label);
}

function ServicesHero() {
    return (
        <section className="page-shell relative z-10 pt-10 sm:pt-16 lg:pt-16">
            <div className="flex w-full flex-col justify-start">
                <h1 className="theme-text-primary page-title-display max-w-4xl lg:text-[clamp(3.8rem,5vw,4.55rem)]">Nossos serviços.</h1>
            </div>
        </section>
    );
}

function ServiceCard({ plan }: { plan: ServicePlan }) {
    const Icon = plan.icon;

    return (
        <article className={`relative flex h-full flex-col overflow-hidden rounded-xl border p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-surface) sm:p-7 ${plan.featured ? "border-(--color-accent) bg-(--color-brand-black)" : "theme-surface theme-border"}`}>
            <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rotate-45 border border-(--color-accent)/35" />
            <div className="relative z-10 flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                    <div className={plan.featured ? "text-(--color-accent)" : "text-(--color-brand-black)"}>
                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <span className={`type-chip w-fit rounded-lg px-3 py-1 ${plan.featured ? "bg-(--color-brand-cream)/10 text-(--color-brand-cream)/70" : "bg-(--color-black-soft) theme-text-muted"}`}>{plan.timeline}</span>
                </div>

                <div className="mt-5 sm:mt-6">
                    <h2 className={`type-section-title ${plan.featured ? "text-(--color-brand-cream)" : "theme-text-primary"}`}>{plan.name}</h2>
                    <p className={`mt-3 text-sm font-semibold leading-relaxed ${plan.featured ? "text-(--color-brand-cream)/72" : "theme-text-secondary"}`}>{plan.description}</p>
                </div>

                <div className={`mt-5 border-t pt-4 sm:mt-6 sm:pt-5 ${plan.featured ? "border-white/10" : "theme-border"}`}>
                    <p className={`type-chip mb-4 ${plan.featured ? "text-(--color-brand-cream)/55" : "theme-text-muted"}`}>Incluído</p>
                    <ul className="grid gap-3">
                        {plan.included.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <CircleCheckBig className={`mt-0.5 h-4 w-4 shrink-0 ${plan.featured ? "text-(--color-accent)" : "text-(--color-brand-black)"}`} strokeWidth={1.75} />
                                <span className={`text-sm leading-relaxed ${plan.featured ? "text-(--color-brand-cream)/80" : "theme-text-secondary"}`}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <a href={whatsappHref(plan.name)} target="_blank" rel="noopener noreferrer" className={`type-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 transition-all duration-300 hover:scale-[1.01] sm:mt-7 ${plan.featured ? "theme-cta-primary" : "theme-cta-secondary"}`}>
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
            </div>
        </article>
    );
}

function MainServices() {
    return (
        <section className="page-shell relative z-10 py-8 sm:py-10 lg:py-12">
            <div className="mb-3 flex items-center justify-between gap-3 lg:hidden">
                <p className="theme-text-muted type-chip">Arraste para o lado</p>
                <span className="theme-text-muted text-base" aria-hidden="true">
                    -&gt;
                </span>
            </div>

            <div className="relative">
                <div className="mobile-chip-row -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 overscroll-x-contain scroll-smooth sm:-mx-8 sm:gap-5 sm:scroll-px-8 sm:px-8 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0">
                    {servicePlans.map((plan) => (
                        <div key={plan.slug} className="flex w-[88vw] max-w-97.5 shrink-0 snap-center justify-center first:pl-0 sm:w-[46vw] sm:max-w-105 lg:w-auto lg:max-w-none lg:shrink lg:snap-none">
                            <ServiceCard plan={plan} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function SectionIntro({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
    return (
        <div className="mb-7 max-w-3xl">
            {eyebrow ? <p className="theme-text-muted type-chip mb-3">{eyebrow}</p> : null}
            <h2 className="theme-text-primary type-section-title">{title}</h2>
            <p className="theme-text-secondary mt-3 text-sm leading-relaxed sm:text-base">{description}</p>
        </div>
    );
}

function InfoCard({ group }: { group: InfoGroup }) {
    const Icon = group.icon;

    return (
        <article className="theme-surface theme-border flex h-full flex-col rounded-xl border p-5 shadow-xs sm:p-6">
            <div className="flex items-start gap-3">
                <div className="text-(--color-brand-black)">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                    <h3 className="theme-text-primary type-card-title">{group.title}</h3>
                    {group.subtitle ? <p className="theme-text-muted mt-1 text-sm leading-relaxed font-semibold">{group.subtitle}</p> : null}
                    {group.description ? <p className="theme-text-secondary mt-2 text-sm leading-relaxed">{group.description}</p> : null}
                </div>
            </div>

            <ul className="mt-5 grid gap-3">
                {group.items.map((item) => (
                    <li key={item} className="theme-text-secondary flex items-start gap-3 text-sm leading-relaxed">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-(--color-brand-black)" strokeWidth={1.75} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}

function ProjectIncludes() {
    return (
        <section className="page-shell relative z-10 py-6 sm:py-8 lg:py-10">
            <SectionIntro eyebrow="O que todo projeto leva" title="Uma base essencial para colocar um bom projeto no ar." description="Independentemente do formato escolhido, existe uma base que consideramos essencial para colocar um bom projeto no ar." />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
                {projectBase.map((group) => (
                    <InfoCard key={group.title} group={group} />
                ))}
            </div>
        </section>
    );
}

function AfterDelivery() {
    return (
        <section className="page-shell relative z-10 py-6 sm:py-8 lg:py-10">
            <SectionIntro eyebrow="Depois da entrega" title="A publicação não termina no último clique." description="Antes e depois de colocar o projeto no ar, mantemos uma etapa clara de ajustes e acompanhamento dentro do combinado." />
            <div className="grid gap-4 md:grid-cols-2 lg:gap-6">
                {afterDelivery.map((group) => (
                    <InfoCard key={group.title} group={group} />
                ))}
            </div>
        </section>
    );
}

function OutOfScope() {
    return (
        <section className="page-shell relative z-10 py-6 sm:py-8 lg:py-10">
            <div className="theme-surface theme-border rounded-xl border p-5 shadow-xs sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-3xl">
                        <SectionIntro eyebrow="Escopo transparente" title="O que não faz parte do escopo padrão" description="Alguns projetos vão além de um site institucional ou landing page e precisam de um escopo próprio." />
                        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                            {outOfScopeItems.map((item) => (
                                <div key={item} className="theme-text-secondary flex items-start gap-2.5 text-sm leading-relaxed">
                                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-(--color-border-strong)" strokeWidth={1.75} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="theme-text-secondary mt-5 text-sm leading-relaxed">Precisou de algo assim? Converse com a gente e avaliamos o projeto separadamente.</p>
                    </div>

                    <a href={whatsappHref("Outra necessidade")} target="_blank" rel="noopener noreferrer" className="theme-border theme-text-secondary type-button inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border px-6 py-3.5 transition-colors hover:bg-(--color-brand-black) hover:text-(--color-brand-cream) sm:w-auto">
                        Conversar sobre outra necessidade
                        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ServicesCTA() {
    return (
        <section className="page-shell relative z-10 pt-6 pb-20 sm:pt-8 sm:pb-24 lg:pt-10 lg:pb-28">
            <div className="relative overflow-hidden rounded-xl border border-(--color-accent)/45 bg-(--color-brand-black) p-6 text-(--color-brand-cream) shadow-(--shadow-surface) sm:p-9">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rotate-45 border border-(--color-accent)/35" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full border border-(--color-accent)/25" />
                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                        <h2 className="type-section-title text-(--color-brand-cream)">
                            Seu negócio já existe.
                            <br />
                            Agora ele precisa ser encontrado.
                        </h2>
                        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-(--color-brand-cream)/75 sm:text-base">Vamos construir uma presença digital que apresente bem o que você faz e facilite o próximo contato.</p>
                    </div>
                    <a href={whatsappHref("Meu projeto")} target="_blank" rel="noopener noreferrer" className="theme-cta-primary type-button inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl px-7 py-4 sm:w-auto">
                        Conversar sobre meu projeto
                        <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default function Services() {
    return (
        <main className="theme-page brand-page-bg relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-start overflow-hidden">
            <PageBackground />
            <ServicesHero />
            <MainServices />
            <ProjectIncludes />
            <AfterDelivery />
            <OutOfScope />
            <ServicesCTA />
        </main>
    );
}
