import DatePickerCombined from "../components/DatePickerCombined";
import Button from "../components/Button";

function NewUserPage() {
  return (
    <div>
      <Button>existing user?</Button>
      <h1 className="text-3xl font-bold underline">This is a new user page</h1>
      <DatePickerCombined />
      <Button>date submit</Button>
    </div>
  );
}

export default NewUserPage;
