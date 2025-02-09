import React from 'react'
import SubHeaderTitle from '../Common/SubHeaderTitle'

const AttendanceCard = ({detail}) => {

  return (
    <div className='attendance-card-section'>
        {detail?.map((item, index)=>(
        <div className="attendance-card" key={index} style={{backgroundColor:`${item.backgroundColor}`}}>
            <SubHeaderTitle title={item?.title} />
            <p className='count'>{item?.count}</p>
            {item?.percentage && <span style={{fontSize:".6rem",float:"right"}}>{item.percentage}</span> }
        </div>
        
        ))}
    </div>
  )
}

export default AttendanceCard
