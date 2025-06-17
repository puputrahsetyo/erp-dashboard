import React from 'react';

/**
 * Finance component for managing financial tasks.
 * This component provides an interface for handling financial records, budgets, and financial reporting.
 * Termasuk:
 * - Buku besar (General Ledger)
 * - Laporan keuangan
 * - Akun dan transaksi
 * - Piutang dan utang
 * * The Finance page is designed to streamline financial operations and enhance financial management.
 * * @component
 * @returns {JSX.Element} The Finance component displaying financial information.
 * @example
 * return <Finance />;
 */

const Finance: React.FC = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Finance Dashboard</h2>
            <div className="flex flex-wrap gap-6">
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px] max-w-[320px] flex flex-col items-start">
                    <div className="text-base font-semibold mb-3">Total Revenue</div>
                    <div className="text-xl font-bold">$120,000</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px] max-w-[320px] flex flex-col items-start">
                    <div className="text-base font-semibold mb-3">Total Expenses</div>
                    <div className="text-xl font-bold">$80,000</div>
                </div>
                <div className="bg-white rounded-lg shadow p-6 flex-1 min-w-[220px] max-w-[320px] flex flex-col items-start">
                    <div className="text-base font-semibold mb-3">Net Profit</div>
                    <div className="text-xl font-bold">$40,000</div>
                </div>
            </div>
        </div>
    );
};

export default Finance;
