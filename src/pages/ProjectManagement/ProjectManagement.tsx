import React from "react";

/**
 * ProjectManagement component for managing projects.
 * This component provides an interface for handling project details, statuses, and managers.
 * Termasuk:
 * - Timeline proyek
 * - Tugas proyek
 * - Milestone proyek
 * - Manajer proyek
 * - Tanggal jatuh tempo
 * * The Project Management page is designed to streamline project tracking and enhance team collaboration.
 * * @component
 * @returns {JSX.Element} The ProjectManagement component displaying project information.
 * @example
 * return <ProjectManagement />;
 */

const projects = [
    {
        id: 1,
        name: "Website Redesign",
        status: "In Progress",
        manager: "Alice Johnson",
        dueDate: "2024-07-15",
    },
    {
        id: 2,
        name: "Mobile App Launch",
        status: "Completed",
        manager: "Bob Smith",
        dueDate: "2024-05-30",
    },
    {
        id: 3,
        name: "API Integration",
        status: "Pending",
        manager: "Carol Lee",
        dueDate: "2024-08-10",
    },
];

const statusColors: Record<string, string> = {
    "In Progress": "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
    Pending: "bg-gray-100 text-gray-800",
};

const ProjectManagement: React.FC = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Project Management</h1>
                <div className="bg-white shadow rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Project Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Manager
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {projects.map((project) => (
                                <tr key={project.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {project.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[project.status]}`}
                                        >
                                            {project.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {project.manager}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {project.dueDate}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                    Add New Project
                </button>
            </div>
        </div>
    );
};

export default ProjectManagement;