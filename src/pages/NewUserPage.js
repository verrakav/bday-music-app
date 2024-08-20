import DatePickerCombined from "../components/DatePickerCombined";
import {useState} from "react";
import DateList from "../components/DateList";

function NewUserPage() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="align-center flex flex-col items-center m-5">
      <DatePickerCombined />
      <DateList
        className="flex"
        date={selectedDate}
      />
    </div>
  );
}

export default NewUserPage;
