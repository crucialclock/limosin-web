import "../../styles/Logo.css";

export default function Logo() {
    return (
        <div className="logo-wrapper flex cursor-pointer select-none items-center py-2">
            <img src="/logo-texto.svg" alt="Limosin" className="h-8 w-auto sm:h-9" />
        </div>
    );
}
