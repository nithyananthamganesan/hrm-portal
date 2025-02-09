import React from 'react'
import SubHeaderTitle from '../Common/SubHeaderTitle'
import { DROPDOWN } from '../../utils/constants'

const AnnouncementCard = () => {
    const detail = {
        title:"Announcement",date:"Today, 13 Sep 2021",
        values:[
            { announcementTitle:"Outing schedule for every departement", postedTime:"5 Minutes ago", },
            { announcementTitle:"Meeting HR Department", postedTime:"", },
            { announcementTitle:"IT Department need two more talents for UX/UI Designer position", postedTime:"Yesterday, 09:15 AM", },
        ]
    }
  return (
    <div className='annuncement-card-section'>
        <div className="title-section">
            <div className="title">
                <SubHeaderTitle title={detail?.title}/>
            </div>
            <div className="today-date">
                <p>{detail?.date}<span>{'>'}</span></p>
            </div>
        </div>
        {detail?.values?.map((item,index)=>(
            <div className="announcement-card" key={index}>
                <div className="announcement-heading">
                    <div className="announcement-title">{item?.announcementTitle}</div>
                    <div className="posted-time">{item?.postedTime}</div>
                </div>
                <div className="announcement-options">
                    <div className="options-icon">...</div>
                </div>
            </div>
        ))}
        <div className="see-all-card">
            <p>See All Announcement</p>
        </div>
    </div>
  )
}

export default AnnouncementCard
