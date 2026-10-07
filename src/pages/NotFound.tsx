import PageIntro from "../components/layout/PageIntro";
import { SEO } from "../components/seo/SEO";

export default function NotFound() {
    return (
        <>
            <SEO title="Página não encontrada | Limosin" description="A página solicitada não foi encontrada no site da Limosin." canonicalPath="/" robots="noindex, follow" />
            <PageIntro eyebrow="404" title="Página não encontrada." description="O endereço que você tentou acessar não existe ou ainda não foi publicado. Você pode voltar para a home ou seguir para uma das áreas principais da Limosin." primaryHref="/" primaryLabel="Ir para a home" secondaryHref="/servicos" secondaryLabel="Ver serviços" />
        </>
    );
}
