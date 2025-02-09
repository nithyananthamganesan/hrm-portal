import React from 'react'
import { BIRTHDAY_IMG } from '../../utils/constants'
import SubHeaderTitle from '../Common/SubHeaderTitle'

const BirthdayCard = ({selectedDate}) => {
    const detail = {
        title:"Birthday Calendar",
        values:[
            {name:"Robert Whistable",role:"Product manager",date:"15 Feb 1998",img:BIRTHDAY_IMG},
            {name:"Robert Whistable",role:"Product manager",date:"",img:""},
        ]
    }
    const filteredBirthdays = selectedDate
    ? detail.values.filter((item) => {
        const formattedDate = item?.date.split(" ").slice(0,2).join(" ");
        console.log("item.date",item.date);
        console.log("selectedDate",selectedDate);
        
        return formattedDate === selectedDate
    })
    : detail.values;
  return (
    <div className="birthday-calendar-section">
        <div className="birthday-calendar-title">
            <SubHeaderTitle title={detail.title} />
        </div>
        <div className="birthday-card-section">
        {filteredBirthdays.length > 0 ? (
          filteredBirthdays.map((item, index) => (
            <div key={index} className="birthday-calendar-card">
              <div className="birthday-card-img">
                <img src={item.img}  />
              </div>
              <div className="birthday-card-content">
                <div className="birthday-card-title">
                  <p>{item.name}</p>
                </div>
                <div className="birthday-card-role">
                  <p>{item.role}</p>
                </div>
                <div className="birthday-date">
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-birthday">No birthdays on this date.</p>
        )}
        </div>
    </div>
  )
}

export default BirthdayCard
