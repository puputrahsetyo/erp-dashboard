import React, { useMemo, useState } from "react";
import { INVENTORY_CONSTANTS, INVENTORY_DATA } from "../../constants/inventory";
import PieChart from "../../components/Pie/PieChart";
import * as d3 from "d3";

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

const Inventory: React.FC = () => {
     // Pagination settings
    const ITEMS_PER_PAGE = INVENTORY_CONSTANTS.PAGINATION.ITEMS_PER_PAGE ||10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = INVENTORY_DATA.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const [selectColumnPie, setSelectColumnPie] = useState<string>("name");

    // Paginated data
    const paginatedData = useMemo(
        () =>
            INVENTORY_DATA.slice(
                (currentPage - 1) * ITEMS_PER_PAGE,
                currentPage * ITEMS_PER_PAGE
            ),
        [currentPage]
    );

    // Pagination controls
    const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
    const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

    const dataPieChart = useMemo(() => {
        if (selectColumnPie === 'category'){
            const categoryMap: Record<string, number> = {};
            INVENTORY_DATA.forEach(item => {
                categoryMap[item.category] = (categoryMap[item.category] || 0) + item.quantity;
            });
            return Object.entries(categoryMap).map(([category, quantity], idx:number) => ({
                label: category,
                value: quantity,
                color: d3.schemeCategory10[idx % 10] // Random color for each category
            }));
        } else if (selectColumnPie === 'status') {
            const statusMap: Record<string, number> = {};
            INVENTORY_DATA.forEach(item => {
                if(item.status === 'Out of Stock') return; // Skip out of stock items
                statusMap[item.status] = (statusMap[item.status] || 0) + item.quantity;
            });
            return Object.entries(statusMap).map(([status, quantity],idx:number) => ({
                label: status,
                value: quantity,
                color: d3.schemeCategory10[idx % 10] // Random color for each status
            }));
        }
        return INVENTORY_DATA.map((item,i) => {
            return {
            label: item[selectColumnPie as keyof typeof item] as string,
            value: item.quantity,
            color: d3.schemeCategory10[i % 10] // Assign a color from D3's category scheme
            }
    });
    }, [INVENTORY_DATA, selectColumnPie]);

    const handleClickColumn = (column: string) => {
        if(column === 'id' || column === 'quantity') return;
        if(selectColumnPie === column){
            setSelectColumnPie('name')
            return
        } else {
            setSelectColumnPie(column);
        }
    }

    const dataCardOutOfStock = INVENTORY_DATA.filter(item => item.status === 'Out of Stock')
    const dataCardLowStock = INVENTORY_DATA.filter(item => item.status === 'Low Stock');

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{INVENTORY_CONSTANTS.PAGE_TITLE}</h1>
            <PieChart data={dataPieChart} />
             <div className="flex flex-col md:flex-row gap-6 w-full">
                <div className=" bg-red-100 p-6 rounded-lg shadow mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Out of Stock Items</h3>
                    {dataCardOutOfStock.length > 0 ? (
                        <ul className="list-disc pl-5 space-y-2">
                            {dataCardOutOfStock.map((item) => (
                                <li key={item.id} className="text-gray-700">
                                    {item.name} (ID: {item.id})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">{INVENTORY_CONSTANTS.EMPTY_STATE_MESSAGE}</p>
                    )}
                </div>
                <div className=" bg-yellow-100 p-6 rounded-lg shadow mb-6">
                    <h3 className="text-xl font-semibold mb-4 text-black">Low Stock Items</h3>
                    {dataCardLowStock.length > 0 ? (
                        <ul className="list-disc pl-5 space-y-2 h-20 overflow-y-auto">
                            {dataCardLowStock.map((item) => (
                                <li key={item.id} className="text-gray-700">
                                    {item.name} (ID: {item.id})
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-500">{INVENTORY_CONSTANTS.EMPTY_STATE_MESSAGE}</p>
                    )}
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Actions</h3>
                <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    {INVENTORY_CONSTANTS.ACTIONS.ADD}
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
                    {INVENTORY_CONSTANTS.ACTIONS.EDIT}
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded">
                    {INVENTORY_CONSTANTS.ACTIONS.DELETE}
                </button>
            </div>
            <div className="overflow-x-auto bg-white rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            {
                                INVENTORY_CONSTANTS.TABLE_HEADERS.map((header) => (
                                    <th
                                        key={header.key}
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                                        onClick ={() => handleClickColumn(header.key)}
                                    >
                                        {header.label}
                                    </th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {paginatedData.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.id}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.category}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{item.quantity}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${INVENTORY_CONSTANTS.STATUS_COLORS[item.status as keyof typeof INVENTORY_CONSTANTS.STATUS_COLORS]}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* Pagination Controls */}
                    <tfoot>
                        <tr>
                            <td colSpan={INVENTORY_CONSTANTS.TABLE_HEADERS.length}>
                                <div className="flex justify-between items-center px-6 py-4">
                                    <button
                                        onClick={handlePrev}
                                        disabled={currentPage === 1}
                                        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                    >
                                        {                                        INVENTORY_CONSTANTS.PAGINATION.PREVIOUS || "Previous"}
                                    </button>
                                    <span className="text-sm text-gray-600">
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                        onClick={handleNext}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-1 rounded bg-gray-200 text-gray-700 disabled:opacity-50"
                                    >
                                        {INVENTORY_CONSTANTS.PAGINATION.NEXT || "Next"}
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

export default Inventory;