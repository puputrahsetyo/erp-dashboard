import React from 'react';
import { PURCHASING_CONSTANTS, PURCHASING_DATA } from '../../constants/purchasing';

/**
 * Purchasing component for managing procurement processes.
 * This component provides an interface for handling purchase orders, suppliers, and procurement activities.
 * Termasuk:
 * - Permintaan pembelian (Purchase Requests(PR))
 * - Pemesanan pembelian (Purchase Orders(PO))
 * - Supplier List
 * - Status Pemesanan
 * * The Purchasing page is designed to streamline procurement operations and enhance supplier management.
 * * @component
 * @returns {JSX.Element} The Purchasing component displaying procurement information.
 * @example
 * return <Purchasing />;
 */

const Purchasing: React.FC = () => {
    // Pagination settings
    const ITEMS_PER_PAGE = PURCHASING_CONSTANTS.PAGINATION.ITEMS_PER_PAGE || 10;
    const [currentPage, setCurrentPage] = React.useState(1);
    const totalItems = PURCHASING_DATA.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    // Paginated data
    const paginatedData = React.useMemo(
        () =>
            PURCHASING_DATA.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [currentPage]
    );
    // Pagination controls
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
    // Disable pagination buttons for now, implement later

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Purchasing</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-700">Purchase Orders</h2>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Create Purchase Order
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                {
                                    PURCHASING_CONSTANTS.TABLE_HEADERS.map((header) => (
                                        <th
                                            key={header.key}
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            {header.label}
                                        </th>
                                    ))
                                }
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {paginatedData.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {item.supplier}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {item.item}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {item.quantity}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                        {item.totalCost}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${PURCHASING_CONSTANTS.STATUS_COLORS[item.status as keyof typeof PURCHASING_CONSTANTS.STATUS_COLORS]}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-blue-600 hover:text-blue-800">View Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={PURCHASING_CONSTANTS.TABLE_HEADERS.length+1} className="px-6 py-4">
                                    <div className="flex justify-between items-center">
                                        <button
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                            onClick={handlePrev}
                                        >
                                            {PURCHASING_CONSTANTS.PAGINATION.PREVIOUS || "Previous"}
                                        </button>
                                        <span className="text-sm text-gray-600">
                                            Page {currentPage} of {totalPages}
                                        </span>
                                        <button
                                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                            onClick={handleNext}
                                        >
                                            {PURCHASING_CONSTANTS.PAGINATION.NEXT || "Next"}
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

export default Purchasing;