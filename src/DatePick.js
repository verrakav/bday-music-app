import React, from "react";
import DatePicker form 'react-datepicker';
import ButtonSubmit from "./ButtonSubmit";

function DatePick() {
  return (
    <div className="input-container">
      <input type="date" name="bday" className="input-date" />
      <ButtonSubmit />
    </div>
  );
}

export default DatePick;
