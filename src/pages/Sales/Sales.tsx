import React, { useMemo, useState } from "react";
import { SALES_CONSTANTS, SALES_DATA } from "../../constants/sales";

/**
 * Sales page component that displays a list of sales transactions.
 * This component includes a table that shows:
 * - Daftar penjualan
 * - Pembuatan invoice
 * - Riwayat pembayaran
 * - Pelanggan (Cutomer Master)
 * * The Sales page is designed to help manage sales transactions and customer interactions.
 * * @component
 * @returns {JSX.Element} The Sales component displaying sales transactions.
 * * @example
 * return <Sales />;
 */

const Sales: React.FC = () => {
     // Pagination settings
    const ITEMS_PER_PAGE = SALES_CONSTANTS.PAGINATION.ITEMS_PER_PAGE ||10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = SALES_DATA.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    // Paginated data
    const paginatedData = useMemo(
        () =>
            SALES_DATA.slice(
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
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Sales</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            {
                                SALES_CONSTANTS.TABLE_HEADERS.map((header) => (
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
                        {
                            paginatedData.map((sale) => (
                                <tr key={sale.orderId}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sale.orderId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sale.customerName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sale.product}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{sale.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 text-center">{sale.totalPrice}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${SALES_CONSTANTS.STATUS_COLORS[sale.status as keyof typeof SALES_CONSTANTS.STATUS_COLORS]}`}>
                                            {sale.status}
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={SALES_CONSTANTS.TABLE_HEADERS.length} className="px-6 py-4">
                                <div className="flex justify-between items-center">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentPage === 1}
                                        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                                    >
                                        Previous
                                    </button>
                                    <span className="text-sm text-gray-700">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages}
                                        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
                                    >
                                        Next
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Sales;