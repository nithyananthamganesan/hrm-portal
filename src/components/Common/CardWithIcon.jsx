import React from 'react'
import './common.css'

const CardWithIcon = ({icon,title,onClick}) => {
  return (
    <div className="card-with-icon">
        <div className="cards-section">
            <div className="card" onClick={onClick ? onClick : undefined} style={{ cursor: onClick ? 'pointer' : 'default' }}>
                <div className="icon">
                    <img src={icon} alt="" />
                </div>
                <div className="title">
                    {title}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardWithIcon
