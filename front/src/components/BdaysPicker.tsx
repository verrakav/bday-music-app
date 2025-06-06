//  hooks
import { useState } from "react";

export default function BdaysPicker() {
  const [bdays, setBdays] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  //  collects dates from the user
  const handleAddDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBdays((prev) => {
      //  if there's no prev uses []
      if (bdays.length <= 5) {
        return [...(prev || []), e.target.value];
      } else {
        return [...prev];
      }
    });
    if (bdays.length === 5) setMessage("Enough bdays!");
  };

  // removes a date if not needed
  const handleRemoveDate = (dateIdx: number) => {
    const updatedDates = bdays.filter((_, idx) => idx !== dateIdx);

    setBdays(updatedDates);
  };
  return (
    <div className="flex flex-col w-2/3 bg-green-300">
      <p>NAME HERE</p>
      <input
        type="date"
        min="1950-01-01"
        value={bdays}
        onChange={handleAddDate}
      />
      <ul>
        {bdays.map((date, idx) => {
          return (
            <li key={idx} className="flex flex-row justify-around">
              <p>{date}</p>
              <button onClick={() => handleRemoveDate(idx)}>X</button>
            </li>
          );
        })}
        {message && <li>{message}</li>}
      </ul>
    </div>
  );
}
