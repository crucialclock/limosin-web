import { siteConfig } from "../../config/site";
import type { ContactBriefingForm } from "./contact.types";

export function buildWhatsappUrl(solutionLabel?: string) {
    const whatsappText = solutionLabel ? `Ola! Gostaria de conversar sobre: ${solutionLabel}.` : "Ola! Vim pelo site da Limosin e queria conversar sobre uma pagina para o meu negocio.";
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;
}

export function buildBriefingWhatsappUrl(formData: ContactBriefingForm, solutionLabel?: string) {
    const lines = [
        "Ola! Vim pelo site da Limosin e queria contar uma ideia de pagina/site.",
        solutionLabel ? `Interesse: ${solutionLabel}` : "",
        `Nome: ${formData.contactName}`,
        `E-mail: ${formData.email}`,
        formData.companyName ? `Empresa/projeto: ${formData.companyName}` : "",
        `Prazo ideal: ${formData.deadline}`,
        `Objetivo: ${formData.objective}`,
        formData.scope.length ? `Escopo possivel: ${formData.scope.join(", ")}` : "",
        formData.references ? `Referencias: ${formData.references}` : "",
        formData.budget ? `Investimento previsto: ${formData.budget}` : "",
    ].filter(Boolean);

    return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;
}
