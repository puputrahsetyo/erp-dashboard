import React, { useMemo, useState } from "react";
import { MANUFACTURING_CONSTANTS, MANUFACTURING_DATA, MANUFACTURING_STATISTICS } from "../../constants/manufacturing";

/**
 * Manufacturing component for managing manufacturing tasks.
 * This component provides an interface for handling manufacturing operations, work orders, and production metrics.
 * Termasuk:
 * - Daftar pesanan kerja
 * - Efisiensi produksi
 * - Downtime mesin
 * - Laporan produksi
 * * The Manufacturing page is designed to streamline manufacturing operations and enhance production management.
 * * @component
 * @returns {JSX.Element} The Manufacturing component displaying manufacturing information.
 * * @example
 * return <Manufacturing />;
 */

const Manufacturing: React.FC = () => {
     // Pagination settings
    const ITEMS_PER_PAGE = MANUFACTURING_CONSTANTS.PAGINATION.ITEMS_PER_PAGE ||10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = MANUFACTURING_DATA.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Paginated data
    const paginatedData = useMemo(
        () =>
            MANUFACTURING_DATA.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [currentPage]
    );

    // Pagination controls
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    {MANUFACTURING_CONSTANTS.PAGE_TITLE}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {
                        Object.keys(MANUFACTURING_CONSTANTS.STATISTICS).map((stat) => (
                            <div key={stat} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                                <span className={`text-2xl font-semibold ${MANUFACTURING_CONSTANTS.STATISTICS_COLORS[stat as keyof typeof MANUFACTURING_CONSTANTS.STATISTICS_COLORS]}`}>
                                    {MANUFACTURING_STATISTICS[stat as keyof typeof MANUFACTURING_STATISTICS] || "N/A"}
                                </span>
                                <span className="text-gray-500 mt-2">
                                    {MANUFACTURING_CONSTANTS.STATISTICS[stat as keyof typeof MANUFACTURING_CONSTANTS.STATISTICS]}
                                </span>
                            </div>
                        ))
                    }
                    {/* <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-blue-600">120</span>
                        <span className="text-gray-500 mt-2">Active Orders</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-green-600">85%</span>
                        <span className="text-gray-500 mt-2">Production Efficiency</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-red-600">3</span>
                        <span className="text-gray-500 mt-2">Machine Downtime</span>
                    </div> */}
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Works Orders List
                    </h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                {
                                    MANUFACTURING_CONSTANTS.TABLE_HEADERS.map((header) => (
                                        <th
                                            key={header.key}
                                            className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase"
                                        >
                                            {header.label}
                                        </th>
                                    ))
                                }
                                {/* <th className="px-4 py-2 text-left text-gray-600">Order ID</th>
                                <th className="px-4 py-2 text-left text-gray-600">Product</th>
                                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                                <th className="px-4 py-2 text-left text-gray-600">Due Date</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                paginatedData.length > 0 ? (
                                    paginatedData.map((order) => (
                                        <tr key={order.orderId} className="border-t">
                                            <td className="px-4 py-2">{order.orderId}</td>
                                            <td className="px-4 py-2">{order.product}</td>
                                            <td className="px-4 py-2">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${MANUFACTURING_CONSTANTS.STATUS_COLORS[order.status as keyof typeof MANUFACTURING_CONSTANTS.STATUS_COLORS]}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="px-4 py-2">{order.dueDate}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={MANUFACTURING_CONSTANTS.TABLE_HEADERS.length} className="text-center text-gray-500 py-4">
                                            {MANUFACTURING_CONSTANTS.EMPTY_STATE_MESSAGE}
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={MANUFACTURING_CONSTANTS.TABLE_HEADERS.length}>
                                    <div className="flex justify-between items-center px-6 py-4">
                                        <button
                                            onClick={handlePrev}
                                            disabled={currentPage === 1}
                                            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                        >
                                            {                                        MANUFACTURING_CONSTANTS.PAGINATION.PREVIOUS || "Previous"}
                                        </button>
                                        <span className="text-sm text-gray-600">
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <button
                                            onClick={handleNext}
                                            disabled={currentPage === totalPages}
                                            className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                        >
                                            {MANUFACTURING_CONSTANTS.PAGINATION.NEXT || "Next"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manufacturing;