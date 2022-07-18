import React from "react";

const style = {
  background: "lightgray",
  border: "2px solid blue",
  fontSize: "33px",
  fontWeight: "1000",
  cursor: "pointer",
  outline: "none",
};
const Square = ({ value, onClick }) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;
