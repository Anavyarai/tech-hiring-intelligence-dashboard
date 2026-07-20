import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

import { salaryDistributionData } from "../../data/mockAnalytics";

export default function SalaryDistributionChart() {
    return (
        <div
            className="rounded-3xl border p-5 h-72"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3 className="text-lg font-semibold mb-4">
                Salary Distribution
            </h3>

            <ResponsiveContainer width="100%" height="88%">
                <BarChart data={salaryDistributionData}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="range" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="jobs"
                        fill="var(--color-primary)"
                        radius={[8, 8, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}