import DatePickerCombined from "../components/DatePickerCombined";
import { useState } from "react";
import DateList from "../components/DateList";

function NewUserPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = () => {
    console.log(selectedDate.$d);
  };

  return (
    <div className="align-center flex flex-col items-center">
      <DatePickerCombined
        onDateSubmit={handleDateChange}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      />
      <DateList className="flex" />
    </div>
  );
}

export default NewUserPage;
