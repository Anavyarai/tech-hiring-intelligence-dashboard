export default function FilterBar({
    filters,
    setFilters,
})  {
    return (
            <div
                className="flex flex-wrap items-center gap-4 rounded-3xl border p-5"
                style={{
                    background: "var(--color-card)",
                    borderColor: "var(--color-border)",
                }}
>
            <input
                value={filters.search}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        search: e.target.value,
                    }
                    )
                }
                type="text"
                placeholder="🔍 Search jobs..."
                className="w-[340px] rounded-xl border px-4 py-2 outline-none"
                style={{
                    borderColor: "var(--color-border)",
                    background: "var(--color-card)",
                    color: "#374151",
                }}
            />

            <select
                    value={filters.location}
                    onChange={(e) =>
                        setFilters({
                            ...filters,
                            location: e.target.value,
                        })
                    }
                    className="w-[150px] rounded-xl border px-4 py-2"
                    style={{
                        borderColor: "var(--color-border)",
                        background: "var(--color-card)",
                        color: "#374151",
                    }}
                >
                    <option value="All">Location</option>
                    <option value="Bengaluru">Bengaluru</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Remote">Remote</option>
            </select>

            <select
                value={filters.skill}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        skill: e.target.value,
                    })
                }
                className="w-[150px] rounded-xl border px-4 py-2"
                style={{
                    borderColor: "var(--color-border)",
                    background: "var(--color-card)",
                    color: "#374151",
                }}
            >
                <option value="All">Skill</option>
                <option value="React">React</option>
                <option value="Python">Python</option>
                <option value="SQL">SQL</option>
                <option value="AWS">AWS</option>
                <option value="Java">Java</option>
            </select>

            <select
                value={filters.workMode}
                onChange={(e) =>
                    setFilters({
                        ...filters,
                        workMode: e.target.value,
                    })
                }
                className="w-[150px] rounded-xl border px-4 py-2"
                style={{
                    borderColor: "var(--color-border)",
                    background: "var(--color-card)",
                    color: "#374151",
                }}
            >
                <option value="All">Work Mode</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
            </select>

            <button
                className="w-[140px] rounded-xl bg-[var(--color-primary)] px-4 py-2 text-white hover:opacity-90 transition"
                onClick={() =>
                    setFilters({
                        search: "",
                        location: "All",
                        skill: "All",
                        workMode: "All",
                    }

                    )
                }
            >
                Reset Filters
            </button>
        </div>
    );
}