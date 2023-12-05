import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css"; /*will it work without? how?*/

import DatePicker from "react-datepicker";
import ButtonSubmit from "./ButtonSubmit";

function DatePick() {
  const [date, setDate] = useState(null);
  const handleDateChange = (date) => setDate(date);
  const currentYear = new Date().getFullYear();

  return (
    <div className="input-container">
      {/* below is the imported component */}
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        className="input-date"
        placeholderText="day/month/year"
        // the stuff below limits the year selection
        showYearDropdown={true}
        yearDropdownItemNumber={100}
        minDate={new Date("1940-01-01")}
        maxDate={new Date(currentYear)}
      />
      <ButtonSubmit />
    </div>
  );
}

export default DatePick;
