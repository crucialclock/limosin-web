/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ExternalLink, FileText, FolderGit2, Globe, Layers, Palette, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import BrandShape from "../components/brand/BrandShape";
import PageBackground from "../components/brand/PageBackground";

export type Project = {
    slug: string;
    name: string;
    category: "Uma página" | "Site" | "Portfólio" | "Ideia maior";
    description: string;
    tags: string[];
    icon: LucideIcon;
    liveUrl?: string;
    repoUrl?: string;
    imageUrl?: string;
};

export const projects: Project[] = [
    {
        slug: "pagina-campanha",
        name: "Página para Divulgação",
        category: "Uma página",
        description: "Uma página direta para explicar uma novidade e levar a pessoa para o contato certo.",
        tags: ["Apresentação", "WhatsApp", "Publicação"],
        icon: Rocket,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "site-negocio",
        name: "Site para Negócio",
        category: "Site",
        description: "Um site simples para contar quem você é, o que faz e como as pessoas podem falar com você.",
        tags: ["Início", "Sobre", "Contato"],
        icon: Globe,
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "portfolio-criativo",
        name: "Página de Portfólio",
        category: "Portfólio",
        description: "Um lugar para reunir trabalhos, história, serviços e caminhos de contato sem complicar.",
        tags: ["Trabalhos", "História", "Contato"],
        icon: Palette,
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "ideia-maior",
        name: "Ideia Maior",
        category: "Ideia maior",
        description: "Quando a necessidade passa de uma página simples, o caminho é conversar e desenhar o escopo com calma.",
        tags: ["Conversa", "Escopo", "Etapas"],
        icon: Layers,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    },
];

const categories: ("Todos" | Project["category"])[] = ["Todos", "Uma página", "Site", "Portfólio", "Ideia maior"];

function ProjectCard({ project }: { project: Project }) {
    const Icon = project.icon;
    const hasAnyLink = project.liveUrl || project.repoUrl;

    return (
        <article className="theme-surface theme-border group relative flex h-full w-full flex-col overflow-hidden rounded-xl border shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-surface)">
            <div className="relative h-36 w-full overflow-hidden bg-(--color-brand-black)">
                {project.imageUrl && (
                    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
                        <img src={project.imageUrl} alt="" className="h-full w-full object-cover opacity-25 grayscale contrast-115 transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:opacity-40 group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-linear-to-t from-(--color-brand-black) via-transparent to-transparent opacity-70" />
                    </div>
                )}

                <BrandShape type="circle" className="right-[-2rem] top-[-2rem] z-10 h-24 w-24" color="rgba(255,214,44,.16)" />
                <div className="absolute bottom-5 left-6 z-20 rounded-xl border border-(--color-brand-cream)/20 bg-(--color-brand-black) p-2.5 text-(--color-brand-yellow)">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6">
                <div>
                    <span className="type-chip rounded-md bg-(--color-accent-soft) px-2.5 py-1 text-(--color-brand-black)">{project.category}</span>
                </div>

                <div className="mt-4 flex-1">
                    <h2 className="theme-text-primary type-card-title sm:text-xl">{project.name}</h2>
                    <p className="theme-text-secondary mt-2.5 text-sm leading-relaxed">{project.description}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-(--color-border-soft) bg-(--color-canvas) px-2 py-0.5 text-[11px] font-semibold text-(--color-text-secondary)">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="theme-border mt-6 flex items-center border-t pt-4">
                    {hasAnyLink ? (
                        <div className="type-button flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="theme-cta-secondary group/live inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 active:scale-[0.98]">
                                    <span className="truncate">Acessar página</span>
                                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" strokeWidth={1.75} />
                                </a>
                            )}

                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="theme-border theme-text-secondary group/repo inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border bg-(--color-canvas) px-4 py-2.5 transition-all hover:text-(--color-text-primary) active:scale-[0.98]">
                                    <FolderGit2 className="h-3.5 w-3.5" strokeWidth={1.75} />
                                    <span className="truncate">Ver código</span>
                                </a>
                            )}
                        </div>
                    ) : (
                        <div className="theme-text-muted inline-flex items-center gap-1.5 text-xs font-semibold select-none">
                            <FileText className="h-3.5 w-3.5" />
                            Exemplo de formato
                        </div>
                    )}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState<string>("Todos");
    const filteredProjects = projects.filter((project) => activeCategory === "Todos" || project.category === activeCategory);

    return (
        <main className="theme-page brand-page-bg relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-start overflow-hidden">
            <PageBackground />

            <section className="page-shell relative z-10 pt-10 sm:pt-16 lg:pt-16">
                <div className="flex w-full flex-col justify-start">
                    <h1 className="theme-text-primary page-title-display max-w-4xl lg:text-[clamp(3.8rem,5vw,4.55rem)]">
                        Ideias que
                        <br />
                        viram presença.
                    </h1>

                    <div className="mt-5 flex flex-col gap-5 sm:mt-7 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <p className="theme-text-secondary max-w-2xl text-base leading-relaxed font-medium sm:text-lg">Alguns formatos que a Limosin pode criar: uma página direta, um site simples, um portfólio ou uma ideia maior para conversar com calma.</p>

                        <div className="mobile-chip-row theme-border -mx-1 flex max-w-full items-center gap-1.5 overflow-x-auto rounded-xl border bg-(--color-canvas-strong) p-1.5 shadow-xs">
                            {categories.map((category) => (
                                <button key={category} onClick={() => setActiveCategory(category)} className="type-button cursor-pointer rounded-lg px-4 py-2 whitespace-nowrap text-(--color-text-secondary) transition-all hover:text-(--color-text-primary) active:scale-95 data-[active=true]:bg-(--color-brand-black) data-[active=true]:text-(--color-brand-cream)" data-active={activeCategory === category}>
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="page-shell relative z-10 py-8 pb-20 sm:py-10 lg:py-12 lg:pb-24">
                {filteredProjects.length > 0 ? (
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                        {filteredProjects.map((project) => (
                            <div key={project.slug} className="flex h-full w-full">
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                ) : null}
            </section>
        </main>
    );
}
