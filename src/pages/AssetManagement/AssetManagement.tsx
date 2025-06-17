import React from "react";

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

const assets = [
    { id: 1, name: "Laptop", type: "Electronics", status: "Active", assignedTo: "John Doe" },
    { id: 2, name: "Office Chair", type: "Furniture", status: "Inactive", assignedTo: "Jane Smith" },
    { id: 3, name: "Projector", type: "Electronics", status: "Active", assignedTo: "Meeting Room" },
];

const AssetManagement: React.FC = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Asset Management</h1>
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
                                {assets.map((asset) => (
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
                                {assets.length === 0 && (
                                    <tr>
                                        <td colSpan={6} className="text-center py-4 text-gray-400">
                                            No assets found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssetManagement;