import React, { useMemo, useState } from "react";
import { ASSET_CONSTANTS, ASSETS_DATA } from "../../constants/assets";

/**
 * Asset Management component for managing company assets.
 * This component provides an interface for tracking and managing assets such as equipment, furniture, and electronics.
 * Termasuk:
 * - Daftar aset (Asset List)
 * - Status aset (Asset Status)
 * - Penugasan aset (Asset Assignment)
 * - Pengelolaan inventaris (Inventory Management)
 * - Pencarian dan filter aset
 * * The Asset Management page is designed to enhance asset tracking and management efficiency.
 * * @component
 * @returns {JSX.Element} The Asset Management component displaying asset information.
 * @example
 * return <AssetManagement />;
 */

const AssetManagement: React.FC = () => {
    const ITEMS_PER_PAGE = ASSET_CONSTANTS.PAGINATION.ITEMS_PER_PAGE ||10;
    const [currentPage, setCurrentPage] = useState(1);
        const totalItems = ASSETS_DATA.length;
        const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    
        // Paginated data
        const paginatedData = useMemo(
            () =>
                ASSETS_DATA.slice(
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
                <h1 className="text-3xl font-bold mb-6 text-gray-800">{ASSET_CONSTANTS.PAGE_TITLE}</h1>
                <div className="bg-white shadow rounded-lg p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">Assets</h2>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                            Add Asset
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {paginatedData.map((asset) => (
                                    <tr key={asset.id}>
                                        <td className="px-4 py-2">{asset.id}</td>
                                        <td className="px-4 py-2">{asset.name}</td>
                                        <td className="px-4 py-2">{asset.type}</td>
                                        <td className="px-4 py-2">
                                            <span
                                                className={`px-2 py-1 rounded text-xs font-semibold ${
                                                    asset.status === "Active"
                                                        ? "bg-green-100 text-green-700"
                                                        : "bg-gray-200 text-gray-600"
                                                }`}
                                            >
                                                {asset.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">{asset.assignedTo}</td>
                                        <td className="px-4 py-2 text-right">
                                            <button className="text-blue-600 hover:underline mr-2">Edit</button>
                                            <button className="text-red-600 hover:underline">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                {paginatedData.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-4 text-gray-400">
                                            No assets found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                             <tfoot>
                                <tr>
                                    <td colSpan={ASSET_CONSTANTS.TABLE_HEADERS.length}>
                                        <div className="flex justify-between items-center px-6 py-4">
                                            <button
                                                onClick={handlePrev}
                                                disabled={currentPage === 1}
                                                className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                            >
                                                {                                        ASSET_CONSTANTS.PAGINATION.PREVIOUS || "Previous"}
                                            </button>
                                            <span className="text-sm text-gray-600">
                                                Page {currentPage} of {totalPages}
                                            </span>
                                            <button
                                                onClick={handleNext}
                                                disabled={currentPage === totalPages}
                                                className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                            >
                                                {ASSET_CONSTANTS.PAGINATION.NEXT || "Next"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetManagement;