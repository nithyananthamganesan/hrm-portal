import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ANNOUNCEMENT, ATTENDANCE, ATTENDANCE_ACTIVE, DASHBOARD, DASHBOARD_ACTIVE, EMPLOYEE, EMPLOYEE_ACTIVE, PAYROLL, SETTINGS, 
  SIDEBAR_LOGO, SUPPORT, TASK 
} from '../../utils/constants';
import './layout.css'; // Ensure you have styles for active state

const Sidebar = () => {
  const location = useLocation(); // Get current path

  return (
    <div className='sidebar-section'>
      <div className="sidebar-layout">
        <div className="sidebar-logo">
          <Link to='/dashboard'>
            <img src={SIDEBAR_LOGO} alt="SIDEBAR_LOGO" />
          </Link>
        </div>
        <div className="nav-items">
          <div className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={location.pathname === '/dashboard' ? DASHBOARD_ACTIVE :DASHBOARD } alt="DASHBOARD" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/dashboard">Dashboard</Link>
            </div>
          </div>
          <div className={`nav-item ${location.pathname.startsWith('/attendance') ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={location.pathname.startsWith('/attendance') ? ATTENDANCE_ACTIVE : ATTENDANCE} alt="ATTENDANCE" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/attendance">Attendance</Link>
            </div>
          </div>
          <div className={`nav-item ${location.pathname.startsWith('/employee') ? 'active' : ''}`}>
            <div className="nav-icon">
              <img src={location.pathname.startsWith('/employee') ? EMPLOYEE_ACTIVE : EMPLOYEE} alt="EMPLOYEE" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/employee">Employee</Link>
            </div>
          </div>
          <div className={`nav-item `}>
            <div className="nav-icon">
              <img src={PAYROLL} alt="PAYROLL" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/payroll">Payroll</Link>
            </div>
          </div>
          <div className={`nav-item `}>
            <div className="nav-icon">
              <img src={TASK} alt="TASK" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/task">Task</Link>
            </div>
          </div>
          <div className={`nav-item `}>
            <div className="nav-icon">
              <img src={ANNOUNCEMENT} alt="ANNOUNCEMENT" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/announcement">Announcement</Link>
            </div>
          </div>
          <div className="divider">OTHER</div>
          <div className={`nav-item `}>
            <div className="nav-icon">
              <img src={SUPPORT} alt="SUPPORT" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/support">Support</Link>
            </div>
          </div>
          <div className={`nav-item `}>
            <div className="nav-icon">
              <img src={SETTINGS} alt="SETTINGS" />
            </div>
            <div className="nav-label">
              <Link className="navlink" to="/settings">Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
