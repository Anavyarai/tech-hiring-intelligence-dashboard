export default function ExecutiveSummary() {
    return (
        <section
            className="rounded-2xl border p-8"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h2
                className="text-xl font-semibold mb-5"
                style={{
                    color: "var(--color-text)",
                }}
            >
                Executive Summary
            </h2>

            <div className="space-y-4">
                <p
                    className="text-base leading-7"
                    style={{
                        color: "var(--color-text-secondary)",
                    }}
                >
                    React remains the most requested frontend skill, appearing
                    in 34% of active job listings.
                </p>

                <p
                    className="text-base leading-7"
                    style={{
                        color: "var(--color-text-secondary)",
                    }}
                >
                    Remote opportunities account for 58% of current openings,
                    continuing to dominate hybrid roles.
                </p>

                <p
                    className="text-base leading-7"
                    style={{
                        color: "var(--color-text-secondary)",
                    }}
                >
                    Bengaluru and Hyderabad together contribute more than 40%
                    of all active technology hiring.
                </p>
            </div>
        </section>
    );
}