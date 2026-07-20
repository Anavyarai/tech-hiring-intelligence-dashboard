import ExecutiveSummary from "../components/common/ExecutiveSummary";
import KPICard from "../components/cards/KPICard";
// import { dashboardKPIs } from "../data/mockAnalytics";
import HiringTrendChart from "../components/charts/HiringTrendChart";
import SkillDemandChart from "../components/charts/SkillDemandChart";
import LocationChart from "../components/charts/LocationChart";
import SalaryDistributionChart from "../components/charts/SalaryDistributionChart";
import JobsTable from "../components/tables/JobsTable";
import FilterBar from "../components/filters/FilterBar";
import { useState } from "react";
import { jobsTableData } from "../data/mockJobs";

export default function Dashboard() {

    // useState
    const [filters, setFilters] = useState({
    search: "",
    location: "All",
    skill: "All",
    workMode: "All",
});
    // filtered jobs
    const filteredJobs = jobsTableData.filter((job) => {
    const searchTerm = filters.search.toLowerCase();

    const matchesSearch =
        job.role.toLowerCase().includes(searchTerm) ||
        job.company.toLowerCase().includes(searchTerm) ||
        job.location.toLowerCase().includes(searchTerm) ||
        job.skills.toLowerCase().includes(searchTerm);

    const matchesLocation =
        filters.location === "All" ||
        job.location === filters.location;

    const matchesSkill =
        filters.skill === "All" ||
        job.skills.includes(filters.skill);

    const matchesWorkMode =
        filters.workMode === "All" ||
        job.workMode === filters.workMode;


    return (
        matchesSearch &&
        matchesLocation &&
        matchesSkill &&
        matchesWorkMode
    );
});

const openRoles = filteredJobs.length;

const remoteJobs = filteredJobs.filter(
    (job) => job.workMode === "Remote"
).length;

const remoteShare =
    openRoles === 0
        ? 0
        : Math.round((remoteJobs / openRoles) * 100);

const salaryNumbers = filteredJobs.map((job) => {
    const range = job.salary.replace("L", "").split("–");

    return (
        (parseFloat(range[0]) + parseFloat(range[1])) / 2
    );
});

const avgSalary =
    salaryNumbers.length === 0
        ? 0
        : (
              salaryNumbers.reduce((a, b) => a + b, 0) /
              salaryNumbers.length
          ).toFixed(1);

const skillCounts = {};

filteredJobs.forEach((job) => {
    job.skills.split(", ").forEach((skill) => {
        skillCounts[skill] = (skillCounts[skill] || 0) + 1;
    });
});

const topSkill =
    Object.keys(skillCounts).length === 0
        ? "-"
        : Object.entries(skillCounts).sort(
              (a, b) => b[1] - a[1]
          )[0][0];


    return (
        <main className="flex-1 overflow-y-auto px-10 py-8">
            <div className="mx-auto max-w-[1120px] space-y-8">

                <ExecutiveSummary />

                <section className="grid grid-cols-4 gap-6">

                    <KPICard
                        title="Open Roles"
                        value={openRoles}
                        trend="+12.4%"
                        direction="up"
                    />

                    <KPICard
                        title="Remote Share"
                        value={`${remoteShare}%`}
                        trend="-6%"
                        direction="down"
                    />

                    <KPICard
                        title="Avg Salary"
                        value={`₹${avgSalary}L`}
                        trend="Stable"
                        direction="neutral"
                    />

                    <KPICard
                        title="Top Skill"
                        value={topSkill}
                        trend="+14%"
                        direction="up"
                    />

                    </section>

                <div className="pt-2">
                    <FilterBar
                    filters={filters}
                    setFilters={setFilters}
                />
                </div>

                <section className="grid grid-cols-2 gap-6">
                    <HiringTrendChart />

                    <SkillDemandChart />

                    <LocationChart />

                    <SalaryDistributionChart />
                </section>

                <JobsTable jobs={filteredJobs}
                />

            </div>
        </main>
    );
}