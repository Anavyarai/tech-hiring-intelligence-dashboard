export default function ChartCard({
    title,
    children,
}) {
    return (
        <div
            className="rounded-3xl border p-5 h-72 flex flex-col"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3
                className="mb-4 text-lg font-medium"
                style={{
                    color: "var(--color-text)",
                }}
            >
                {title}
            </h3>

            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}