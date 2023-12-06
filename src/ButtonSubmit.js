import React from "react";

function ButtonSubmit({ onClick }) {
  return (
    <button id="submit" onClick={onClick} type="button" className="btn">
      Add a bday
    </button>
  );
}

export default ButtonSubmit;
