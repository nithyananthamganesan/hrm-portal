import React from 'react'
import HeaderTitle from '../components/Common/HeaderTitle';
import CardWithIcon from '../components/Common/CardWithIcon';
import { ATTENDANCES, LEAVE_REQUEST } from '../utils/constants';
import "../components/Attendance/attendance.css"
import { useNavigate } from 'react-router-dom';

const Attendance = () => {
  const navigate = useNavigate();

  const handleLeaveCardClick = () => {
    navigate('/attendance/leave_request');
  }
  const handleAttendanceCardClick = () => {
    navigate('/attendance/list');
    
  }
    const detail = [
      { title: "Leave Request", icon: LEAVE_REQUEST, onClick: handleLeaveCardClick },
      { title: "Attendances", icon: ATTENDANCES, onClick: handleAttendanceCardClick },
    ];
  return (
    <div>
      <div className='attendances-section'>
        <div className="attendances-title">
          <HeaderTitle title={'Attendance'}/>
        </div>
        <div className="attendances-cards-section">
          {detail.map((item,index)=> (
            <div className="attendances-cards" key={index}>
              <CardWithIcon icon={item.icon} title={item.title} onClick={item.onClick}/>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Attendance
