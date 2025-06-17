import React from 'react';

/**
 * Dashboard ini menampilkan berbagai statistik penting untuk manajemen bisnis.
 * Statistik yang ditampilkan meliputi:
 * - Ringkasan keuangan (revenue,expenses, profit)
 * - Grafik performa (penjualan, produksi, dan lainnya)
 * - Aktivitas terakhir (transaksi terbaru, aktivitas pengguna)
 * - Notifikasi penting (peringatan, pengingat, dan lainnya)
 * * Dashboard ini dirancang untuk memberikan gambaran umum yang cepat dan mudah dipahami tentang kinerja bisnis.
 * * @component
 * @returns {JSX.Element} Komponen Dashboard yang menampilkan statistik bisnis.
 * @example
 * return <Dashboard />;
 * 
 */

const stats = [
    { label: 'Users', value: 1200 },
    { label: 'Sales', value: 340 },
    { label: 'Revenue', value: '$12,400' },
    { label: 'Orders', value: 89 },
];

const Dashboard: React.FC = () => {
    return (
        <div style={{ padding: 24 }}>
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{stat.label}</h2>
                        <p className="text-gray-600 mt-2">{stat.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;