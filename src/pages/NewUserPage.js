import DatePickerCombined from "../components/DatePickerCombined";
import Button from "../components/Button";

function NewUserPage() {
  return (
    <div>
      <Button>existing user?</Button>
      <h1>This is a new user page</h1>
      <DatePickerCombined />
      <Button>date submit</Button>
    </div>
  );
}

export default NewUserPage;
