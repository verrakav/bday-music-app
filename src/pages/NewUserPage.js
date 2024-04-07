import DatePickerCombined from "../components/DatePickerCombined";
import Button from "../components/Button";

function NewUserPage() {
  return (
    <div className="align-center flex flex-col items-center">
      <DatePickerCombined />
      <Button>date submit</Button>
    </div>
  );
}

export default NewUserPage;
