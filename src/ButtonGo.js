import React from "react";

function ButtonGo() {
  const handleClick = (event) => alert("a working GO! btn");
  return (
    <button id="go" onClick={handleClick} className="btn">
      GO!
    </button>
  );
}

export default ButtonGo;
