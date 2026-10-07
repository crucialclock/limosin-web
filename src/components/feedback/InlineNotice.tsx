type InlineNoticeProps = {
    message: string;
    tone?: "error" | "info" | "success";
};

const toneClasses = {
    success: "border-(--color-accent)/40 bg-(--color-accent-soft) text-(--color-brand-black)",
    error: "border-(--color-border-strong) bg-(--color-black-soft) text-(--color-brand-black)",
    info: "border-(--color-accent)/40 bg-(--color-accent-soft) text-(--color-brand-black)",
};

export default function InlineNotice({ message, tone = "info" }: InlineNoticeProps) {
    return <p className={`rounded-xl border px-4 py-3 text-sm font-medium ${toneClasses[tone]}`}>{message}</p>;
}
