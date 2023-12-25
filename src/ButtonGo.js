import React from "react";

function ButtonGo() {
  const handleClick = (event) => alert("More later");
  return (
    <button id="go" onClick={handleClick} className="btn">
      GO!
    </button>
  );
}

export default ButtonGo;
