/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { ExternalLink, FileText, FolderGit2, Globe, Layers, Palette, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
    slug: string;
    name: string;
    category: "Uma pagina" | "Site" | "Portfolio" | "Ideia maior";
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
        name: "Pagina para Divulgacao",
        category: "Uma pagina",
        description: "Uma pagina direta para explicar uma novidade e levar a pessoa para o contato certo.",
        tags: ["Apresentacao", "WhatsApp", "Publicacao"],
        icon: Rocket,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "site-negocio",
        name: "Site para Negocio",
        category: "Site",
        description: "Um site simples para contar quem voce e, o que faz e como as pessoas podem falar com voce.",
        tags: ["Inicio", "Sobre", "Contato"],
        icon: Globe,
        imageUrl: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "portfolio-criativo",
        name: "Pagina de Portfolio",
        category: "Portfolio",
        description: "Um lugar para reunir trabalhos, historia, servicos e caminhos de contato sem complicar.",
        tags: ["Trabalhos", "Historia", "Contato"],
        icon: Palette,
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&auto=format&fit=crop&q=80",
    },
    {
        slug: "ideia-maior",
        name: "Ideia Maior",
        category: "Ideia maior",
        description: "Quando a necessidade passa de uma pagina simples, o caminho e conversar e desenhar o escopo com calma.",
        tags: ["Conversa", "Escopo", "Etapas"],
        icon: Layers,
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80",
    },
];

const categories: ("Todos" | Project["category"])[] = ["Todos", "Uma pagina", "Site", "Portfolio", "Ideia maior"];

function ProjectCard({ project }: { project: Project }) {
    const Icon = project.icon;
    const hasAnyLink = project.liveUrl || project.repoUrl;

    return (
        <article className="theme-surface theme-border group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-zinc-400 hover:shadow-xl">
            <div className="relative h-36 w-full overflow-hidden bg-zinc-950" style={{ clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)" }}>
                {project.imageUrl && (
                    <div className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden">
                        <img src={project.imageUrl} alt="" className="h-full w-full object-cover opacity-25 grayscale contrast-115 transition-all duration-700 ease-in-out group-hover:scale-102 group-hover:opacity-40 group-hover:grayscale-0" />
                        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                    </div>
                )}

                <div className="home-dot-grid pointer-events-none absolute inset-0 z-10 opacity-10" />
                <div className="absolute bottom-5 left-6 z-20 rounded-xl border border-white/10 bg-white/10 p-2.5 text-zinc-300 backdrop-blur-md">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
            </div>

            <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6">
                <div>
                    <span className="type-chip theme-text-muted rounded-md bg-zinc-100 px-2.5 py-1 text-zinc-500">{project.category}</span>
                </div>

                <div className="mt-4 flex-1">
                    <h2 className="theme-text-primary type-card-title sm:text-xl">{project.name}</h2>
                    <p className="theme-text-secondary mt-2.5 text-sm leading-relaxed text-zinc-600">{project.description}</p>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-md border border-zinc-200/60 bg-zinc-50 px-2 py-0.5 text-[11px] font-semibold text-zinc-600">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="theme-border mt-6 flex items-center border-t border-zinc-100 pt-4">
                    {hasAnyLink ? (
                        <div className="type-button flex w-full flex-col items-stretch gap-2 sm:flex-row sm:items-center">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/live inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-zinc-950 px-4 py-2.5 text-white shadow-xs transition-all hover:bg-zinc-800 active:scale-[0.98]">
                                    <span className="truncate">Acessar pagina</span>
                                    <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" strokeWidth={2.2} />
                                </a>
                            )}

                            {project.repoUrl && (
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="group/repo inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-zinc-700 transition-all hover:bg-zinc-100 hover:text-zinc-950 active:scale-[0.98]">
                                    <FolderGit2 className="h-3.5 w-3.5" strokeWidth={2.2} />
                                    <span className="truncate">Ver codigo</span>
                                </a>
                            )}
                        </div>
                    ) : (
                        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 select-none">
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
        <main className="theme-page relative flex min-h-[calc(100vh-72px)] w-full flex-col justify-start overflow-hidden bg-white">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="home-dot-grid absolute inset-0 opacity-70" />
                <div className="theme-support-soft absolute top-16 -right-32 h-72 w-72 rounded-full opacity-40 blur-[110px]" />
                <div className="theme-accent-soft absolute -bottom-36 left-12 h-80 w-80 rounded-full opacity-30 blur-[120px]" />
            </div>

            <section className="page-shell relative z-10 pt-10 sm:pt-16 lg:pt-16">
                <div className="flex w-full flex-col justify-start">
                    <h1 className="theme-text-primary page-title-display max-w-5xl lg:text-[clamp(4.6rem,5.6vw,5rem)]">
                        Ideias que
                        <br />
                        viram presenca.
                    </h1>

                    <div className="mt-5 flex flex-col gap-5 sm:mt-7 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
                        <p className="theme-text-secondary max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg">Alguns formatos que a Limosin pode criar: uma pagina direta, um site simples, um portfolio ou uma ideia maior para conversar com calma.</p>

                        <div className="mobile-chip-row -mx-1 flex max-w-full items-center gap-1.5 overflow-x-auto rounded-2xl border border-zinc-200/60 bg-zinc-100 p-1.5 shadow-xs">
                            {categories.map((category) => (
                                <button key={category} onClick={() => setActiveCategory(category)} className="type-button cursor-pointer rounded-xl px-4 py-2 whitespace-nowrap text-zinc-600 transition-all hover:text-zinc-950 active:scale-95 data-[active=true]:bg-zinc-950 data-[active=true]:text-white data-[active=true]:shadow-md" data-active={activeCategory === category}>
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
