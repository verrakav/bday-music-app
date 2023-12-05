import React from "react";

function ButtonSubmit(props) {
  function handleEvent(event) {
    alert(`you're pushy`);
  }
  return (
    <button id="submit" onClick={handleEvent} className="btn">
      Add a bday
    </button>
  );
}

export default ButtonSubmit;
