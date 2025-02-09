import React from 'react'
import HeaderTitle from '../components/Common/HeaderTitle'
import CardWithIcon from '../components/Common/CardWithIcon'
import { ADD_EMPLOYEE, ORG_CONFIG } from '../utils/constants'
import "../components/Employee/employee.css"
import { useNavigate } from 'react-router-dom'


const Employee = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/employee/list');
  }

  const detail = [
    { title: "Employee", icon: ADD_EMPLOYEE, onClick: handleCardClick },
    { title: "Org Config", icon: ORG_CONFIG, onClick: null },
  ];

  return (
    <div className='employee-section'>
        <div className="employee-title">
          <HeaderTitle title={'Employee'}/>
        </div>
        <div className="employee-card-section">
          {detail.map((item,index)=> (
            <div className="employee-card" key={index}>
              <CardWithIcon icon={item.icon} title={item.title} onClick={item.onClick}/>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Employee
