import React from "react";

/**
 * Inventory Management Stock
 * This component displays a list of inventory items with their details.
 * Termasuk:
 * - Daftar produk/barang
 * - Jumlah stok dan lokasi gudang
 * - Barang masuk/ keluar
 * - Status stok (tersedia, habis, dalam perjalanan)/ stok minimum
 * * - Pencarian dan filter produk
 * * - Tambah, edit, hapus produk
 * * Inventory ini dirancang untuk membantu manajemen stok barang
 * * @component
 * @returns {JSX.Element} Komponen Inventory yang menampilkan daftar produk dan status stok.
 * * @example
 * return <Inventory />;
 */

const inventoryData = [
    { id: 1, name: "Laptop", category: "Electronics", quantity: 12, status: "In Stock" },
    { id: 2, name: "Desk Chair", category: "Furniture", quantity: 5, status: "Low Stock" },
    { id: 3, name: "Monitor", category: "Electronics", quantity: 0, status: "Out of Stock" },
    { id: 4, name: "Notebook", category: "Stationery", quantity: 50, status: "In Stock" },
];

const statusColors: Record<string, string> = {
    "In Stock": "bg-green-100 text-green-800",
    "Low Stock": "bg-yellow-100 text-yellow-800",
    "Out of Stock": "bg-red-100 text-red-800",
};

const Inventory: React.FC = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Inventory</h1>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {inventoryData.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Inventory;