import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Inventory from './pages/Inventory/Inventory';
import Sales from './pages/Sales/Sales';
import Purchasing from './pages/Purchasing/Purchasing';
import HR from './pages/HR/HR';
import Finance from './pages/Finance/Finance';
import Settings from './pages/Settings/Settings';
import CRM from './pages/CRM/CRM';
import Manufacturing from './pages/Manufacturing/Manufacturing';
import AssetManagement from './pages/AssetManagement/AssetManagement';
import ProjectManagement from './pages/ProjectManagement/ProjectManagement';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

interface RequireAuthProps {
    isAuthenticated: boolean;
}

interface AppsRouterProps {
    RequireAuth: React.ComponentType<RequireAuthProps>;
}

const AppsRouter: React.FC<AppsRouterProps> = ({ RequireAuth }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem("isAuthenticated") === "true";
    });

    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated ? "true" : "false");
    }, [isAuthenticated]);
    return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/*"
          element={<RequireAuth isAuthenticated={isAuthenticated} />}
        >
          <Route path="" element={<Dashboard />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="sales" element={<Sales />} />
          <Route path="purchasing" element={<Purchasing />} />
          <Route path="hr" element={<HR />} />
          <Route path="finance" element={<Finance />} />
          <Route path="crm" element={<CRM />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="assets" element={<AssetManagement />} />
          <Route path="project-management" element={<ProjectManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
      </Routes>
    </Router>
    );
}

export default AppsRouter;