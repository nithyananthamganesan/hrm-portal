import React from 'react'

const ActionButton = ({btnName,backgroundColor,textColor, onClick}) => {
    const buttonStyle = {
        backgroundColor:backgroundColor,
        color:textColor,
        border: '1px solid #000',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
  return (
    <div className="action-button">
          <button style={buttonStyle} onClick={onClick}>{btnName}</button>
    </div>
  )
}

export default ActionButton
