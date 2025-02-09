import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import Signin from '../Signin'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Attendance from '../Attendance'

const Layout = () => {
  return (
    <div className='layout-section'>
      Layout

      {/* <Sidebar />
      <div className="main-content">
        <Header />
          <div className="content-section">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/attendance" element={<Attendance />} /> */}
                {/* <Route path="/employee" element={<Employee />} />
                <Route path="/payroll" element={<Payroll />} />
                <Route path="/task" element={<Task />} />
                <Route path="/announcement" element={<Announcement />} />
                <Route path="/support" element={<Support />} />
                <Route path="/settings" element={<Settings />} /> */}
              {/* </Routes>
            </div>
      </div>
       */}
    </div>
  )
}

export default Layout
