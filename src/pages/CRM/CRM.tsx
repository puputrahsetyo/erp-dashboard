import React from "react";
import { CRM_RECENT_ACTIVITY } from "../../constants/crm";

/**
 * CRM component for managing customer relationships.
 * This component provides an interface for handling leads, opportunities, and customer interactions.
 * Termasuk:
 * - Leads
 * - Opportunities
 * - Customers
 * - Recent Activities
 * * The CRM page is designed to enhance customer relationship management and streamline sales processes.
 * * @component
 * @returns {JSX.Element} The CRM component displaying customer relationship information.
 * * @example
 * return <CRM />;
 */

const CRM: React.FC = () => {
    const crmLastActivity = CRM_RECENT_ACTIVITY.slice(0, 3); // Display only the last 5 activities
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">CRM Dashboard</h1>
                    <p className="text-gray-500 mt-2">
                        Manage your customers, leads, and sales pipeline efficiently.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Leads</h2>
                        <p className="text-3xl font-bold text-blue-600">120</p>
                        <span className="text-sm text-gray-400">New this month</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Opportunities</h2>
                        <p className="text-3xl font-bold text-green-600">45</p>
                        <span className="text-sm text-gray-400">Active deals</span>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">Customers</h2>
                        <p className="text-3xl font-bold text-purple-600">320</p>
                        <span className="text-sm text-gray-400">Total</span>
                    </div>
                </section>

                <section className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Activities</h2>
                    <ul className="divide-y divide-gray-100">
                        {crmLastActivity.map((activity, index) => (
                            <li key={index} className="py-3 flex justify-between items-center">
                                <span className="text-gray-700">{activity.activity}</span>
                                <span className="text-xs text-gray-400">{activity.date}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default CRM;