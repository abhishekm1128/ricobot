import React from "react";
import './Chip.scss';

const Chip = ({ text }) => {
  return (
    <div className="chip-container">
      <div className="chip-text">
        {text}
      </div>
    </div>
  );
};

export default Chip;
