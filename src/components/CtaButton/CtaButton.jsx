import React, { useEffect, useState } from "react";
import './CtaButton.scss'

const CtaButton = ({ text, link, linkOut }) => {
  const handleClick = () => {
    if (linkOut) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = link;
    }
  };

  return (
    <button
      onClick={handleClick}
      className="cta-button"
    >
      {text}
    </button>
  );
};

export default CtaButton;
