export default function TableCard({
    title,
    children,
}) {
    return (
        <div
            className="rounded-3xl border p-5"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3
                className="text-xl font-semibold mb-5"
                style={{
                    color: "var(--color-text)",
                }}
            >
                {title}
            </h3>

            {children}
        </div>
    );
}