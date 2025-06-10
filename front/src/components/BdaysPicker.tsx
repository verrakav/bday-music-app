//  hooks
import { useEffect, useState } from "react";

export default function BdaysPicker() {
  const [bdays, setBdays] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //  collects dates from the user
  const handleAddDate = (date: string) => {
    setBdays((prev) => {
      //  if there's no prev uses []
      if (bdays.length < 5) {
        return [...(prev || []), date];
      } else {
        return [...prev];
      }
    });
    if (bdays.length === 5) setMessage("Enough bdays!");
  };

  // clears the message when the list shrinks
  useEffect(() => {
    if (bdays.length < 5) {
      setMessage("");
    }
  }, [bdays]);

  // removes a date if not needed
  const handleRemoveDate = (dateIdx: number) => {
    const updatedDates = bdays.filter((_, idx) => idx !== dateIdx);

    setBdays(updatedDates);
  };

  //  NEW:
  const fetchASong = async (date: string) => {
    // const fetchASong = async () => {
    // const date = "2000-09-24";
    console.log("FETCHING DATA for ", date);
    const res = await fetch(`http://localhost:3001/songs/${date}`, {
      method: "GET",
    });
    const data = await res.json();
    console.log("DATA", data);
  };

  return (
    <div className="flex flex-col w-2/3 bg-green-300">
      <p>userNAME HERE</p>
      <input
        type="date"
        min="1950-01-01"
        value={currentDate} // has to be a separate value as input date expects a string
        onChange={(e) => {
          const date = e.target.value;
          setCurrentDate(date);
          handleAddDate(date);
          // fetchASong(date);
        }}
      />
      <ul>
        {bdays.map((date, idx) => {
          return (
            <li key={idx} className="flex flex-row justify-around">
              <p>{date}</p>
              <button
                onClick={() => {
                  // handleRemoveDate(idx);
                  fetchASong(date);
                }}
              >
                X
              </button>
            </li>
          );
        })}
        {message && <li>{message}</li>}
      </ul>
    </div>
  );
}
