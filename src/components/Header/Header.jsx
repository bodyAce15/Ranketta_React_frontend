import React from "react";
import BackButton from "./BackButton";
import Logo from "./Logo";
import HeaderActions from "./HeaderActions";

const Header = ({ isModalOpen, isFixed, onBackClick, onLogoClick, onContactClick }) => {
  return (
    <header
      id="header"
      className={`w-screen h-[122px] px-[80px] py-[40px] flex items-center justify-between ${
        isFixed ? "fixed" : "absolute"
      } top-0 left-0 z-[70] transition-all duration-300 ${
        isModalOpen ? "header-modal-open" : ""
      }`}
      style={{
        fontFamily: "'Supreme Variable', 'Supreme', sans-serif",
      }}
    >
      <BackButton onClick={onBackClick} />
      <Logo onClick={onLogoClick} />
      <HeaderActions onContactClick={onContactClick} />
    </header>
  );
};

export default Header;

