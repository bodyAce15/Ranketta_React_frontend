import React from "react";
import sunImg from "../../assets/imgs/sun.svg";

const HeaderActions = ({ onContactClick }) => {
  return (
    <div className="header-link flex">
      <button
        className="w-[42px] h-[42px] flex justify-center items-center rounded-[15px] border-[1px] border-white hover:scale-110 hover:bg-white/10 transition-all duration-200"
        aria-label="Toggle theme"
      >
        <img src={sunImg} className="w-[24px] h-[24px]" alt="Sun icon" />
      </button>
      <button
        className="w-[115px] h-[42px] rounded-[15px] mx-[10px] border-[1px] border-white text-color flex justify-center items-center gap-[13px] hover:scale-105 hover:bg-white/10 transition-all duration-200"
        style={{ fontFamily: "'Supreme Variable', 'Supreme', sans-serif" }}
        aria-label="Open menu"
      >
        <p style={{ fontFamily: "'Supreme Variable', 'Supreme', sans-serif" }}>Menu</p>
        <div className="flex gap-[3px]" aria-hidden="true">
          <span className="border-[1.5px] rounded-full w-[4px] h-[4px]"></span>
          <span className="border-[1.5px] rounded-full w-[4px] h-[4px]"></span>
          <span className="border-[1.5px] rounded-full w-[4px] h-[4px]"></span>
        </div>
      </button>
      <button
        onClick={onContactClick}
        className="w-[100px] h-[42px] bg-color rounded-[15px] flex justify-center items-center hover:scale-105 transition-transform duration-200"
        style={{ fontFamily: "'Supreme Variable', 'Supreme', sans-serif" }}
        aria-label="Contact us"
      >
        Contact
      </button>
    </div>
  );
};

export default HeaderActions;

