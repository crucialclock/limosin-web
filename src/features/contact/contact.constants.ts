import type { ContactBriefingForm } from "./contact.types";

export const solutionLabels: Record<string, string> = {
    "pagina-simples": "Pagina Simples",
    "site-simples": "Site Simples",
    "pagina-de-divulgacao": "Pagina de Divulgacao",
    "portfolio-profissional": "Portfolio Profissional",
    "ajustes-e-manutencao": "Ajustes em Site",
    "projeto-especial": "Ideia Maior",
};

export const briefingGuidelines = [
    "<strong>Objetivo:</strong> o que voce quer que a pessoa entenda ou faca ao acessar.",
    "<strong>Conteudo:</strong> textos, imagens, referencias ou materiais que voce ja tem.",
    "<strong>Publico:</strong> para quem essa pagina precisa fazer sentido.",
    "<strong>Prazo:</strong> quando voce gostaria de colocar isso no ar.",
];

export const initialBriefingForm: ContactBriefingForm = {
    budget: "",
    companyName: "",
    contactName: "",
    deadline: "",
    email: "",
    objective: "",
    references: "",
    scope: [],
};

export const briefingScopeOptions = [
    "Pagina simples",
    "Site com algumas paginas",
    "Pagina de divulgacao",
    "Portfolio profissional",
    "Texto e organizacao",
    "Visual da marca",
    "Melhorar pagina existente",
    "Ideia maior para conversar",
];

export const CONTACT_BRIEFING_DRAFT_KEY = "limosin.contact.idea.draft";
