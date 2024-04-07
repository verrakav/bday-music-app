import DatePickerCombined from "../components/DatePickerCombined";
import Button from "../components/Button";

function NewUserPage() {
  return (
    <div className="flex flex-row md:flex-row justify-around items-center ">
      {/* <h1>This is a new user page</h1> */}
      <div className="align center">
        <Button>existing user?</Button>
      </div>
      <div className="align-center flex flex-col items-center">
        <DatePickerCombined />
        <Button>date submit</Button>
      </div>
    </div>
  );
}

export default NewUserPage;
