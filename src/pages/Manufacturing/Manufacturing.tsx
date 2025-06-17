import React from "react";

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
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Manufacturing Dashboard
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
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
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">
                        Recent Work Orders
                    </h2>
                    <table className="min-w-full table-auto">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left text-gray-600">Order ID</th>
                                <th className="px-4 py-2 text-left text-gray-600">Product</th>
                                <th className="px-4 py-2 text-left text-gray-600">Status</th>
                                <th className="px-4 py-2 text-left text-gray-600">Due Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-t">
                                <td className="px-4 py-2">WO-00123</td>
                                <td className="px-4 py-2">Widget A</td>
                                <td className="px-4 py-2">
                                    <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                                        In Progress
                                    </span>
                                </td>
                                <td className="px-4 py-2">2024-07-10</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2">WO-00124</td>
                                <td className="px-4 py-2">Gadget B</td>
                                <td className="px-4 py-2">
                                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                                        Completed
                                    </span>
                                </td>
                                <td className="px-4 py-2">2024-07-08</td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2">WO-00125</td>
                                <td className="px-4 py-2">Device C</td>
                                <td className="px-4 py-2">
                                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-4 py-2">2024-07-12</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Manufacturing;