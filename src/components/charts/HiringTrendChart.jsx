import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

import ChartCard from "./ChartCard";
import { hiringTrendData } from "../../data/mockAnalytics";

export default function HiringTrendChart() {
    return (
        <ChartCard title="Monthly Hiring Trend">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={hiringTrendData}
                    margin={{
                        top: 5,
                        right: 10,
                        left: -20,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid
                        stroke="#ECE7DE"
                        strokeDasharray="2 4"
                    />

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis
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
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartCard>
    );
}