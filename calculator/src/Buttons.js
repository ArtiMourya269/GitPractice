import React from "react";

const Buttons = () => {
  const symbol = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="button-container">
      {symbol.map((element) => (
        <button className="button">{element}</button>
      ))}
    </div>
  );
};

export default Buttons;
