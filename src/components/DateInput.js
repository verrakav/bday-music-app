import Button from "./Button";
export default function DateInput({ date, setDate }) {
  const dateRegEx = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;
  const handleDateChange = event => {
    setDate(event.target.value);
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <form>
        <input
          value={date}
          onChange={handleDateChange}
          type="text"
        />
        <Button
          onClick={event => {
            event.preventDefault();
            setDate(event.target.value);
            console.log(date);
          }}
        >
          dateSubmit
        </Button>
      </form>
    </div>
  );
}
