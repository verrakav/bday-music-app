import React from "react";

function ButtonSubmit(props) {
  function handleEvent(event) {
    alert(`you're pushy`);
  }
  return (
    <button id="submit" className="wider" onClick={handleEvent}>
      Submit
    </button>
  );
}

export default ButtonSubmit;
