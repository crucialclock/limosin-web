import { siteConfig } from "../../config/site";
import type { ContactBriefingForm } from "./contact.types";

export function buildWhatsappUrl(solutionLabel?: string) {
    const whatsappText = solutionLabel ? `Olá! Gostaria de conversar sobre: ${solutionLabel}.` : "Olá! Vim pelo site da Limosin e queria conversar sobre uma página para o meu negócio.";
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
}

export function buildBriefingWhatsappUrl(formData: ContactBriefingForm, solutionLabel?: string) {
    const lines = [
        "Olá! Vim pelo site da Limosin e queria contar uma ideia de página/site.",
        solutionLabel ? `Interesse: ${solutionLabel}` : "",
        `Nome: ${formData.contactName}`,
        `E-mail: ${formData.email}`,
        formData.companyName ? `Empresa/projeto: ${formData.companyName}` : "",
        `Prazo ideal: ${formData.deadline}`,
        `Objetivo: ${formData.objective}`,
        formData.scope.length ? `Escopo possível: ${formData.scope.join(", ")}` : "",
        formData.references ? `Referências: ${formData.references}` : "",
        formData.budget ? `Investimento previsto: ${formData.budget}` : "",
    ].filter(Boolean);

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
