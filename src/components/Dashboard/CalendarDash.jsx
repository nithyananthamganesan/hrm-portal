import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import SubHeaderTitle from "../Common/SubHeaderTitle";

const CalendarDash = ({onDateSelect}) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    const formattedDate = selectedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      // year: 'numeric',
    });
    onDateSelect(formattedDate);
    console.log(
      "formated Date:",formattedDate
    );
  };

  return (
    <div className="calendar-container">
      <SubHeaderTitle title={'Calendar'}/>
      <div className="calendar-comp">
      <Calendar
        onChange={handleDateChange}
        value={date}
        view="month" 
        maxDetail="month" 
      />
      </div>
    </div>
  );
};

export default CalendarDash;
