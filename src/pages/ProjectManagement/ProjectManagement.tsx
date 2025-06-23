import React, { useMemo, useState } from "react";
import { PROJECTS_CONSTANTS, PROJECTS_DATA } from "../../constants/projects";

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

const ProjectManagement: React.FC = () => {
     // Pagination settings
    const ITEMS_PER_PAGE = PROJECTS_CONSTANTS.PAGINATION.ITEMS_PER_PAGE ||10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = PROJECTS_DATA.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Paginated data
    const paginatedData = useMemo(
        () =>
            PROJECTS_DATA.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [currentPage]
    );

    // Pagination controls
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">{PROJECTS_CONSTANTS.PAGE_TITLE}</h1>
                <div className="bg-white shadow rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                {
                                    PROJECTS_CONSTANTS.TABLE_HEADERS.map((header) => (
                                        <th
                                            key={header.key}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            {header.label}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paginatedData.map((project) => (
                                <tr key={project.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {project.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${PROJECTS_CONSTANTS.STATUS_COLORS[project.status as keyof typeof PROJECTS_CONSTANTS.STATUS_COLORS]}`}
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
                        <tfoot>
                            <tr>
                                <td colSpan={PROJECTS_CONSTANTS.TABLE_HEADERS.length} className="px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                                        >
                                            Previous
                                        </button>
                                        <span className="text-sm text-gray-600">
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <button
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 disabled:opacity-50"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
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