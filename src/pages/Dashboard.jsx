import ExecutiveSummary from "../components/common/ExecutiveSummary";
import KPICard from "../components/cards/KPICard";
import { dashboardKPIs } from "../data/mockAnalytics";
import HiringTrendChart from "../components/charts/HiringTrendChart";
import SkillDemandChart from "../components/charts/SkillDemandChart";
import LocationChart from "../components/charts/LocationChart";
import SalaryDistributionChart from "../components/charts/SalaryDistributionChart";
import JobsTable from "../components/tables/JobsTable";

export default function Dashboard() {
    return (
        <main className="flex-1 overflow-y-auto px-10 py-8">
            <div className="mx-auto max-w-[1120px] space-y-8">

                <ExecutiveSummary />

                <section className="grid grid-cols-4 gap-6">
                {dashboardKPIs.map((kpi) => (
                <KPICard
                key={kpi.id}
                title={kpi.title}
                value={kpi.value}
                trend={kpi.trend}
                direction={kpi.direction}
                />
            ))}
            </section>

                <section className="grid grid-cols-2 gap-6">

                    <HiringTrendChart />

                    <SkillDemandChart />

                    <LocationChart />

                    <SalaryDistributionChart />

                </section>

                <JobsTable />

            
                
            </div>
        </main>
    );
}