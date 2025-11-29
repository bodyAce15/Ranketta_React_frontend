import React from "react";
import logoImg from "../../assets/imgs/Group41259.png";

const Logo = ({ onClick }) => {
  return (
    <button onClick={onClick} aria-label="Go to home" className="focus:outline-none">
      <img src={logoImg} alt="Logo" />
    </button>
  );
};

export default Logo;

