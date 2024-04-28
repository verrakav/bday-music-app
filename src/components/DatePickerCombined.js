//sets up the date library adapter
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//
import Button from "./Button";

function DatePickerCombined({ onDateSubmit, setSelectedDate, selectedDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        value={selectedDate}
        onChange={date => setSelectedDate(date)}
      />
      <Button onClick={onDateSubmit}>date submit</Button>
    </LocalizationProvider>
  );
}

export default DatePickerCombined;
