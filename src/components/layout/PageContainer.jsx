export default function PageContainer({ children }) {
    return (
        <div
            className="h-screen flex flex-col overflow-hidden"
            style={{
                background: "var(--color-background)",
                color: "var(--color-text)",
            }}
        >
            {children}
        </div>
    );
}