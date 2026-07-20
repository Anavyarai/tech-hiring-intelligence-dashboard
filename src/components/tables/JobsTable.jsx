import { jobsTableData } from "../../data/mockJobs";

export default function JobsTable() {
    return (
        <div
            className="rounded-3xl border p-6"
            style={{
                background: "var(--color-card)",
                borderColor: "var(--color-border)",
            }}
        >
            <h3 className="text-lg font-semibold mb-6">
                Latest Job Listings
            </h3>

            <table className="w-full border-collapse">
                <thead>
                    <tr
                        className="border-b"
                        style={{
                            borderColor: "var(--color-border)",
                        }}
                    >
                        <th className="text-left py-3">Role</th>
                        <th className="text-left py-3">Company</th>
                        <th className="text-left py-3">Location</th>
                        <th className="text-left py-3">Salary</th>
                        <th className="text-left py-3">Skills</th>
                    </tr>
                </thead>

                <tbody>
                    {jobsTableData.map((job, index) => (
                        <tr
                            key={index}
                            className="border-b hover:bg-gray-50 transition"
                            style={{
                                borderColor: "var(--color-border)",
                            }}
                        >
                            <td className="py-4">{job.role}</td>
                            <td>{job.company}</td>
                            <td>{job.location}</td>
                            <td>{job.salary}</td>
                            <td>{job.skills}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}