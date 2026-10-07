export default function PageBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="brand-bg-grid absolute inset-0" />
            <div className="brand-bg-plane brand-bg-plane-primary" />
            <div className="brand-bg-plane brand-bg-plane-secondary" />
            <div className="brand-bg-mark brand-bg-mark-top" />
            <div className="brand-bg-mark brand-bg-mark-bottom" />
        </div>
    );
}
