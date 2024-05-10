// import DatePickerCombined from "../components/DatePickerCombined";
import DateInput from "../components/DateInput";
import DateList from "../components/DateList";

import { useState } from "react";

function NewUserPage() {
  const [selectedDates, setSelectedDate] = useState([]);
  const [date, setDate] = useState();

  return (
    <div className="align-center flex flex-col items-center">
      <DateInput
        date={date}
        setDate={setDate}
      />
      {/* <DatePickerCombined
        onDateSubmit={handleDateChange}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      /> */}
      <DateList />
    </div>
  );
}

export default NewUserPage;
