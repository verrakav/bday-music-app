import React, { useState } from "react";
import ButtonSubmit from "./ButtonSubmit";

function DatePick() {
  //the two lines create state manager for the date
  const [selectedDate, setDate] = useState("");
  //and the list where the dates are stored
  const [dateList, setDateList] = useState([]);
  //the two functions below dealing with the date
  const handleDateChange = (event) => setDate(event.target.value);
  //and the list update
  const handleSubmit = () => {
    if (selectedDate && dateList.length < 5) {
      setDateList([
        ...dateList /*appends the data list with a new one*/,
        selectedDate,
      ]);
      setDate(""); /*clears the input field*/
    }
  };
  return (
    <div className="input-container">
      <input
        type="date"
        className="input-date"
        value={selectedDate}
        onChange={handleDateChange}
      />
      <ButtonSubmit onClick={handleSubmit} />
      <ul className="friend-list">
        {dateList.map((date, index) => (
          <li key={index}>
            friend #{index + 1}'s bday is: {date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DatePick;
