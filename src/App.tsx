import { useState, useEffect } from "react";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";
import AppsRouter from "./Router";

// Layout component for sidebar and main content
function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const handleLogout = () => {
    localStorage.setItem("isAuthenticated", "false");
    window.location.href = "/login";
  };

  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (!isAuthenticated) {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <aside className={`w-64 bg-white shadow-lg p-6 h-screen overflow-y-auto ${sidebarOpen ? "block" : "hidden"} md:block`}>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Toggle Menu
        </button>

      {/* <aside className="w-64 bg-white shadow-lg p-6"> */}
        <div className="flex items-center mb-6 space-x-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src="/erp-logo.svg" alt="ERP Logo" className="h-16 w-16 rounded-full" />
          <h1 className="text-xl font-bold">ERP Menu</h1>
        </div>
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Log Out
        </button>
        <ul className="space-y-4">
            {/* Dashboard */}
            <li>
            <Link to="/" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
            </li>

            {/* Operations Dropdown */}
            <details className="group">
            <summary className="cursor-pointer text-gray-700 hover:text-blue-600 py-1 px-2 rounded group-open:bg-gray-100">
              Operations
            </summary>
            <ul className="ml-4 space-y-2 mt-2">
              <li>
              <Link to="/inventory" className="text-gray-700 hover:text-blue-600">Inventory</Link>
              </li>
              <li>
              <Link to="/manufacturing" className="text-gray-700 hover:text-blue-600">Manufacturing</Link>
              </li>
              <li>
              <Link to="/assets" className="text-gray-700 hover:text-blue-600">Asset Management</Link>
              </li>
              <li>
              <Link to="/project-management" className="text-gray-700 hover:text-blue-600">Project Management</Link>
              </li>
            </ul>
            </details>

            {/* Business Dropdown */}
            <details className="group">
            <summary className="cursor-pointer text-gray-700 hover:text-blue-600 py-1 px-2 rounded group-open:bg-gray-100">
              Business
            </summary>
            <ul className="ml-4 space-y-2 mt-2">
              <li>
              <Link to="/sales" className="text-gray-700 hover:text-blue-600">Sales</Link>
              </li>
              <li>
              <Link to="/purchasing" className="text-gray-700 hover:text-blue-600">Purchasing</Link>
              </li>
              <li>
              <Link to="/crm" className="text-gray-700 hover:text-blue-600">CRM</Link>
              </li>
            </ul>
            </details>

            {/* Administration Dropdown */}
            <details className="group">
            <summary className="cursor-pointer text-gray-700 hover:text-blue-600 py-1 px-2 rounded group-open:bg-gray-100">
              Administration
            </summary>
            <ul className="ml-4 space-y-2 mt-2">
              <li>
              <Link to="/hr" className="text-gray-700 hover:text-blue-600">HR</Link>
              </li>
              <li>
              <Link to="/finance" className="text-gray-700 hover:text-blue-600">Finance</Link>
              </li>
              <li>
              <Link to="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
              </li>
            </ul>
            </details>
        </ul>
      </aside>
      <main className="flex-1 p-8 overflow-auto h-screen">
        {/* <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">ERP Dashboard</h1>
          <p className="text-gray-600">Welcome to your ERP system</p>
        </header> */}
        <div className="mb-6">
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Toggle Menu
            </button>
          )}
        </div>
        <Outlet />
      </main>
    </div>
  );
}

// Protect routes by checking authentication
function RequireAuth({ isAuthenticated }: { isAuthenticated: boolean }) {
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return <AppLayout />;
}

export default function App() {
  return (
    <AppsRouter RequireAuth={RequireAuth}  />
  )
}