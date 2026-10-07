import type { ContactBriefingForm } from "./contact.types";

export const solutionLabels: Record<string, string> = {
    "landing-page": "Landing Page",
    "site-institucional": "Site Institucional",
    "pagina-simples": "Página Simples",
    "site-simples": "Site Simples",
    "pagina-de-divulgacao": "Página de Divulgação",
    "ajustes-e-manutencao": "Ajustes em Site",
    "projeto-especial": "Ideia Maior",
    "outra-ideia": "Outra ideia",
};

export const briefingGuidelines = [
    "<strong>Objetivo:</strong> o que você quer que a pessoa entenda ou faça ao acessar.",
    "<strong>Conteúdo:</strong> textos, imagens, referências ou materiais que você já tem.",
    "<strong>Público:</strong> para quem essa página precisa fazer sentido.",
    "<strong>Prazo:</strong> quando você gostaria de colocar isso no ar.",
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
    "Página simples",
    "Site com algumas páginas",
    "Página de divulgação",
    "Texto e organização",
    "Visual da marca",
    "Melhorar página existente",
    "Ideia maior para conversar",
];

export const CONTACT_BRIEFING_DRAFT_KEY = "limosin.contact.idea.draft";
