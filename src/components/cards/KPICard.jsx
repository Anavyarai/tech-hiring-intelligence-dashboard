import {
    FiArrowUpRight,
    FiArrowDownRight,
    FiMinus,
} from "react-icons/fi";

export default function KPICard({
    title,
    value,
    trend,
    direction,
}) {
    const trendColor = {
    up: "var(--color-success)",
    down: "text-red-500",
    neutral: "text-amber-600",
};

    const trendIcon = {
    up: <FiArrowUpRight size={18} />,
    down: <FiArrowDownRight size={18} />,
    neutral: <FiMinus size={18} />,
    };

    return (
        <div
            className="rounded-3xl border p-7 min-h-[180px] flex flex-col justify-between"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
}}
        >
            <h3
                className="text-sm font-medium"
                style={{
                    color: "var(--color-text-secondary)",
                }}
            >
                {title}
            </h3>

            <p className="text-[42px] leading-none font-semibold">
                {value}
            </p>

            <div className={`mt-5 ${trendColor[direction]}`}>
    <div className="flex items-center gap-2 text-sm font-medium">
        {trendIcon[direction]}
        <span>{trend}</span>
    </div>

    <p className="mt-1 text-xs"
        style={{
            color: "var(--color-text-secondary)",
}}>
        {direction === "up" && "this week"}
        {direction === "down" && "vs last week"}
        {direction === "neutral" && "stable"}
    </p>
</div>
        </div>
    );
}