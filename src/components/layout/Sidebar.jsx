import {
    FiBarChart2,
    FiTrendingUp,
    FiCode,
    FiDollarSign,
    FiMapPin,
    FiBriefcase,
} from "react-icons/fi";

const menuItems = [
    {
        label: "Overview",
        icon: FiBarChart2,
        active: true,
    },
    {
        label: "Hiring Trends",
        icon: FiTrendingUp,
    },
    {
        label: "Skills",
        icon: FiCode,
    },
    {
        label: "Salaries",
        icon: FiDollarSign,
    },
    {
        label: "Locations",
        icon: FiMapPin,
    },
    {
        label: "Companies",
        icon: FiBriefcase,
    },
];

export default function Sidebar() {
    return (
        <aside
            className="flex flex-col p-6"
            style={{
                width: "280px",
                background: "var(--color-sidebar)",
                borderRight: "1px solid var(--color-border)",
            }}
        >
            <nav className="mt-4 space-y-2">
                {menuItems.map(({ label, icon: Icon, active }) => (
                    <button
                        key={label}
                        className="flex w-full items-center gap-4 rounded-xl px-5 py-3 text-left transition-all duration-200"
                        style={{
                            background: active
                                ? "var(--color-primary)"
                                : "transparent",
                            color: active
                                ? "#ffffff"
                                : "var(--color-text-secondary)",
                            fontWeight: active ? 600 : 500,
                        }}
                    >
                        <Icon size={18} />

                        <span>{label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}