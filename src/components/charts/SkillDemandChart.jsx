import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { skillDemandData } from "../../data/mockAnalytics";

export default function SkillDemandChart() {
    return (
        <div
            className="rounded-2xl border p-5 h-72"
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
                Top Skills in Demand
            </h3>

            <ResponsiveContainer width="100%" height="88%">
                <BarChart
                    data={skillDemandData}
                    margin={{
                        top: 10,
                        right: 15,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        stroke="#ECE7DE"
                        strokeDasharray="2 4"
                    />

                    <XAxis
                        dataKey="skill"
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip />

                    <Bar
                        dataKey="jobs"
                        fill="#C96F50"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}