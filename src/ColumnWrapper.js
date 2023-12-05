import React from "react";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";

function ColumnWrapper() {
  return (
    <div className="wrapper">
      <ColumnLeft />
      <ColumnRight />
    </div>
  );
}

export default ColumnWrapper;
