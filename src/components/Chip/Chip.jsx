import React from "react";
import './Chip.scss';

const Chip = ({ text }) => {
  return (
    <div className="chip-container">
      <span className="chip-text">
        {text}
      </span>
    </div>
  );
};

export default Chip;
