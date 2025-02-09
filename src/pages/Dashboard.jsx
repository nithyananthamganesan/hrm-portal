import React, { useState } from 'react'
import TitleSection from '../components/Dashboard/TitleSection'
import "../components/Dashboard/dashboard.css"
import AttendanceCard from '../components/Dashboard/AttendanceCard'
import PayrollTaskCard from '../components/Dashboard/PayrollTaskCard'
import AnnouncementCard from '../components/Dashboard/AnnouncementCard'
import CalendarDash from '../components/Dashboard/CalendarDash'
import BirthdayCard from '../components/Dashboard/BirthdayCard'

const Dashboard = () => {
  const detail = [
    {title:"Leave Request",count:'04', backgroundColor: "#FFEFE7"},
    {title:"Attendance",count:10, backgroundColor: "#E8F0FB"},
    {title:"Total Employees",count:24, backgroundColor: "#FDEBF9"},
]
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  }
  return (
    <div className='dashboard-section'>
      <div className="dashboard-details">
        <div className="dashboard-title">
          <TitleSection />
        </div>
        <div className="attendance-card">
          <AttendanceCard detail={detail} />
        </div>
        <div className="payroll-task-card">
          <PayrollTaskCard />
        </div>
        <div className="announcement-section">
            <AnnouncementCard />
        </div>
      </div>
      <div className="calender-details">
        <div className="calendar">
          <CalendarDash onDateSelect={handleDateSelect}/>
        </div>
        <div className="birthday-card">
          <BirthdayCard selectedDate={selectedDate}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
