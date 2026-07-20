import { FiMoon } from "react-icons/fi";

export default function Navbar() {
    return (
        <header
            className="flex items-center justify-between px-10"
            style={{
                height: "72px",
                background: "var(--color-card)",
                borderBottom: "1px solid var(--color-border)",
            }}
        >
            <div>
                <h1
                    className="text-3xl font-medium"
                    style={{
                        color: "var(--color-text)",
                    }}
                >
                    Hiring Intelligence
                </h1>

                <p
                    className="mt-1 text-sm"
                    style={{
                        color: "var(--color-text-secondary)",
                    }}
                >
                    Job Market Analytics Dashboard
                </p>
            </div>

            <button
                className="flex items-center gap-2 rounded-xl px-5 py-3 transition-all"
                style={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text)",
                }}
            >
                <FiMoon size={18} />

                Dark Mode
            </button>
        </header>
    );
}