import React from "react";

const Element = ({ isActive, item, isAlreadySelected, index }) => {
  return (
    <div
      style={{
        backgroundColor: isAlreadySelected
          ? "green"
          : isActive
          ? "red"
          : "gray",
        opacity: isAlreadySelected ? "0.5" : 1,
        width: `${(item + item * item) / 2.3}px`,
        height: "16px",
      }}
    >
      {item}
    </div>
  );
};
export default Element;
