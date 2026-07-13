import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar bg-dark">
      <nav className="nav flex-column">
        <Link to="/dashboard" className="nav-link text-white">
          📊 Dashboard
        </Link>
        <Link to="/students" className="nav-link text-white">
          👨‍🎓 Students
        </Link>
        <Link to="/teachers" className="nav-link text-white">
          👨‍🏫 Teachers
        </Link>
        <Link to="/classes" className="nav-link text-white">
          🏫 Classes
        </Link>
        <Link to="/schedules" className="nav-link text-white">
          📅 Schedules
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
