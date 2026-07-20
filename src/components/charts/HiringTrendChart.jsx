import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { hiringTrendData } from "../../data/mockAnalytics";

export default function HiringTrendChart() {
    return (
        <div
            className="rounded-2xl border p-5 h-72"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3
                className="mb-4 text-lg font-semibold"
                style={{
                    color: "var(--color-text)",
                }}
            >
                Hiring Trend
            </h3>

            <ResponsiveContainer width="100%" height="88%">
                <LineChart data={hiringTrendData}>
                    <CartesianGrid
                        stroke="#ECE7DE"
                        strokeDasharray="2 4"
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
/>

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
/>

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="jobs"
                        stroke="#C96F50"
                        strokeWidth={3}
                        dot={false}
                        margin={{
                        top: 10,
                        right: 15,
                        left: -20,
                        bottom: 0,
}}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}