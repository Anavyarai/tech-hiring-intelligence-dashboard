import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import { locationData } from "../../data/mockAnalytics";

export default function LocationChart() {
    return (
        <div
            className="rounded-3xl border p-5 h-72"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3 className="text-lg font-semibold mb-4">
                Hiring by Location
            </h3>

            <ResponsiveContainer width="100%" height="88%">
                <BarChart
                    layout="vertical"
                    data={locationData}
                    margin={{
                        left: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis type="number" />

                    <YAxis
                        dataKey="location"
                        type="category"
                    />

                    <Tooltip />

                    <Bar
                        dataKey="jobs"
                        fill="var(--color-primary)"
                        radius={[0, 8, 8, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}