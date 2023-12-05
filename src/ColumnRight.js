import React from "react";
import ListOfSongs from "./ListOfSong";
import ButtonGo from "./ButtonGo";

function ColumnRight() {
  return (
    <div className="right">
      <h2 className="subhead">Push the button to get your playlist</h2>{" "}
      {/*this should later change
      to smth like: "Your team songs" */}
      <ButtonGo />
      <ListOfSongs />
    </div>
  );
}

export default ColumnRight;
