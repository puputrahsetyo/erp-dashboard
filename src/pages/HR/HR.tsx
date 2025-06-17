import React from "react";

/**
 * HR component for managing Human Resources tasks.
 * This component provides an interface for handling employee records, attendance, and HR-related activities.
 * * Termasuk:
 * - Daftar karyawan
 * - Absensi, cuti, gaji
 * - Struktur organisasi
 * - Evaluasi kinerja
 * * * The HR page is designed to streamline HR operations and enhance employee management.
 * * * @component
 * @returns {JSX.Element} The HR component displaying HR information.
 * * @example
 * return <HR />;
 * 
 */

const HR: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">HR Dashboard</h1>
                <p className="text-gray-600 mb-8">
                    Welcome to the Human Resources dashboard. Here you can manage employee records, view attendance, and handle HR-related tasks.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-blue-700">Employees</span>
                        <span className="text-4xl font-bold mt-2">120</span>
                    </div>
                    <div className="bg-green-100 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-green-700">Attendance</span>
                        <span className="text-4xl font-bold mt-2">98%</span>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 flex flex-col items-center">
                        <span className="text-2xl font-semibold text-yellow-700">Open Positions</span>
                        <span className="text-4xl font-bold mt-2">5</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HR;