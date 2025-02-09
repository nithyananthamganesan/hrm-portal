import React, { useState } from 'react'
import Header from '../pages/Layout/Header'
import Sidebar from '../pages/Layout/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import "../pages/Layout/layout.css"
import Attendance from '../pages/Attendance'
import Employee from '../pages/Employee'
import EmployeeList from '../components/Employee/EmployeeList'
import AttendanceList from '../components/Attendance/AttendanceList'
import AddEmployee from '../components/Employee/AddEmployee'
import { LEAVE_REQUEST } from '../utils/constants'
import LeaveRequest from '../components/Attendance/LeaveRequest'

const MainProfile = () => {
  const location = useLocation();
  // const [isActive, setIsActive] = useState();
  return (
    <div className='layout-section'>
      <Sidebar activePath={location.pathname} />
      <div className="main-content">
        <Header />
        <div className="content-section">
          <Routes>
            <Route path="/dashboard" index element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/attendance/list" element={<AttendanceList />} />
            <Route path="/attendance/leave_request" element={<LeaveRequest />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/employee/list" element={<EmployeeList />} />
            <Route path="/employee/add" element={<AddEmployee />} />
            <Route path="/*" element={<Dashboard />} />
            {/* <Route path="/payroll" element={<Payroll />} />
            <Route path="/task" element={<Task />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/support" element={<Support />} />
            <Route path="/settings" element={<Settings />} /> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainProfile
