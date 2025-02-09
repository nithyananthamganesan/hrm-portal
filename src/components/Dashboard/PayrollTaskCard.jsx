import React from 'react'
import SubHeaderTitle from '../Common/SubHeaderTitle'
import { PAYROLL_IMG, TASK_IMG } from '../../utils/constants'

const PayrollTaskCard = () => {
    const detail = [
        {title:"PayRoll",count:48, men:12, women:12, img:PAYROLL_IMG},
        {title:"Task Request",count:16, men:6, women:10, img:TASK_IMG},
    ]
  return (
    <div className="payroll-task-section">
        {detail.map((item, index)=>(
        <div className="payroll-task-card" key={index}>
            <div className="card-left">
                <div className="title">
                    <SubHeaderTitle title={item?.title}/>
                </div>
                <div className="count">
                    <span>{item?.count}</span>
                </div>
                <div className="person-count">
                    <p>{item?.men} Men</p>
                    <p>{item?.women} Women</p>
                </div>
            </div>
            <div className="card-right">
                <div className="right-img">
                    <img src={item?.img} alt={item?.img} />
                </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default PayrollTaskCard
