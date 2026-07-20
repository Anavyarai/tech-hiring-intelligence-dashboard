export default function SectionTitle({
    children,
}) {
    return (
        <h2
            className="text-2xl font-semibold"
            style={{
                color: "var(--color-text)",
            }}
        >
            {children}
        </h2>
    );
}