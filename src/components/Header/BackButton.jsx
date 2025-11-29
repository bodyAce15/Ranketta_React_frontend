import React from "react";
import { BORDER_RADIUS } from "../../constants/theme";

const BackButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-full w-[109px] bg-color rounded-2xl flex items-center gap-[6px] justify-center hover:scale-105 transition-transform duration-200"
      style={{ fontFamily: "'Supreme Variable', 'Supreme', sans-serif" }}
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <line x1="19" x2="5" y1="12" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      <p className="font-bold" style={{ fontFamily: "'Supreme Variable', 'Supreme', sans-serif" }}>
        Back
      </p>
    </button>
  );
};

export default BackButton;

