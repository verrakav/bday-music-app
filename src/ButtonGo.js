import React from "react";

function ButtonGo() {
  const handleClick = (event) => alert("Patrick was here");
  return (
    <button id="go" onClick={handleClick} className="btn">
      GO!
    </button>
  );
}

export default ButtonGo;
