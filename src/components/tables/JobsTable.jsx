import TableCard from "./TableCard";
// import { jobsTableData } from "../../data/mockJobs";

export default function JobsTable({ jobs }) {
    console.log(jobs);
    return (
        <TableCard title="Latest Job Listings">
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
                    {jobs.map((job, index) => (
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
        </TableCard>
    );
}