import React from "react";

/**
 * Settings component for managing user settings.
 * This component provides an interface for updating user preferences, account information, and other settings.
 * Termasuk:
 * - Hak akses pengguna (User Permissions) (role-based access control)
 * - Pengaturan akun (Account Settings)
 * - Preferensi pengguna (User Preferences)
 * - Keamanan akun (Account Security)
 * - Notifikasi dan pengaturan lainnya
 * - Konfigurasi sistem (System Configuration)
 * * The Settings page is designed to enhance user experience by allowing customization and management of account details.
 * * @component
 * @returns {JSX.Element} The Settings component displaying user settings.
 * @example
 * return <Settings />;
 */

const Settings: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Settings</h1>
            <form className="space-y-6 bg-white shadow rounded-lg p-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new password"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Settings;