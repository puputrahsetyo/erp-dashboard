import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChartBar, FaUsers, FaCog } from 'react-icons/fa';
import './SideNavbar.css';

const navItems = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { to: '/users', label: 'Users', icon: <FaUsers /> },
    { to: '/settings', label: 'Settings', icon: <FaCog /> },
];

const SideNavbar: React.FC = () => (
    <nav className="side-navbar">
        <ul>
            {navItems.map((item) => (
                <li key={item.to}>
                    <NavLink
                        to={item.to}
                        className={({ isActive }) => isActive ? 'active' : ''}
                        end
                    >
                        <span className="icon">{item.icon}</span>
                        <span className="label">{item.label}</span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default SideNavbar;