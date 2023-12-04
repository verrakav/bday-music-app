import React from "react";
import ButtonSubmit from "./ButtonSubmit";

function DatePick() {
  return (
    <div className="left">
      <label for="bday" className="wider">
        Choose your bday
      </label>
      <input type="date" name="bday" className="wider" />
      <ButtonSubmit />
    </div>
  );
}

export default DatePick;
