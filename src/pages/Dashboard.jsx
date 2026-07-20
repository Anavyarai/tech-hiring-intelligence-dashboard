import ExecutiveSummary from "../components/common/ExecutiveSummary";

export default function Dashboard() {
    return (
        <main className="flex-1 overflow-y-auto px-10 py-8">
            <div className="mx-auto max-w-[1120px] space-y-8">

                <ExecutiveSummary />

                <section className="grid grid-cols-4 gap-6">
                    <div
                        className="rounded-2xl border h-44"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-44"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-44"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-44"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />
                </section>

                <section className="grid grid-cols-2 gap-6">
                    <div
                        className="rounded-2xl border h-64"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-64"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-64"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />

                    <div
                        className="rounded-2xl border h-64"
                        style={{
                            background: "var(--color-card)",
                            borderColor: "var(--color-border)",
                        }}
                    />
                </section>

                <section
                    className="rounded-2xl border h-96"
                    style={{
                        background: "var(--color-card)",
                        borderColor: "var(--color-border)",
                    }}
                />
            </div>
        </main>
    );
}