//  hooks
import { useEffect, useState } from "react";

export default function BdaysPicker() {
  const [names, setNames] = useState<string[]>([]);
  const [currentName, setCurrentName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  //  collects dates from the user
  const handleAddName = (e: React.FormEvent, name: string) => {
    e.preventDefault();
    setNames((prev) => {
      //  if there's no prev uses []
      if (names.length < 5) {
        return [...(prev || []), name];
      } else {
        return [...prev];
      }
    });
    setCurrentName("");
    if (names.length === 5) setMessage("Enough names!");
  };

  // clears the message when the list shrinks
  useEffect(() => {
    if (names.length < 5) {
      setMessage("");
    }
  }, [names]);

  // removes a date if not needed
  const handleRemoveName = (nameIdx: number) => {
    const updatedDates = names.filter((_, idx) => idx !== nameIdx);

    setNames(updatedDates);
  };

  //  NEW:
  const fetchSongS = async (names: string[]) => {
    // const fetchASong = async () => {
    console.log("FETCHING DATA for ", names);
    const res = await fetch(`http://localhost:3001/songs/${names}`, {
      method: "GET",
    });
    const data = await res.json();
    console.log("DATA", data);
  };

  return (
    <div className="flex flex-col w-2/3 bg-green-300">
      <p>userNAME HERE</p>
      <form onSubmit={(e) => handleAddName(e, currentName)}>
        <input
          className="bg-blue-300"
          type="text"
          value={currentName}
          placeholder="name"
          onChange={(e) => {
            setCurrentName(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
      <ul>
        {names.map((name, idx) => {
          return (
            <li key={idx} className="flex flex-row justify-around">
              <p>{name}</p>
              <button
                onClick={() => {
                  handleRemoveName(idx);
                }}
              >
                X
              </button>
            </li>
          );
        })}
        {message && <li>{message}</li>}
      </ul>
      <button
        onClick={() => {
          fetchSongS(names);
        }}
      >
        READY!
      </button>
    </div>
  );
}
