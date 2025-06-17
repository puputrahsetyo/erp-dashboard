import React from "react";

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

const salesData = [
    { id: 1, customer: "Acme Corp", date: "2024-06-01", amount: 1200 },
    { id: 2, customer: "Beta LLC", date: "2024-06-02", amount: 850 },
    { id: 3, customer: "Gamma Inc", date: "2024-06-03", amount: 430 },
];

const Sales: React.FC = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Sales</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Customer
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount ($)
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {salesData.map((sale) => (
                            <tr key={sale.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{sale.customer}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{sale.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-right font-semibold">
                                    {sale.amount.toLocaleString()}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sales;