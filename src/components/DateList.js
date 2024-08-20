import {useEffect, useState} from "react";

export default function DateList({selectedDate}) {
  const [dateList, setDateList] = useState([]);
  useEffect(() => {
    setDateList(selectedDate);
  }, []);
  return <div>{dateList}</div>;
}
