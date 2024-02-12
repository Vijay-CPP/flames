import React from "react";
import headerLogo from "../assets/header-logo.png";
import "./Header.css";

const Header = ({ clean }) => {
  return (
    <div className="w-screen h-[10vh] radial-gradient items-center flex justify-center header-bg opacity-100">
      <img
        className="h-32"
        src={headerLogo}
        alt="logo"
        onClick={clean}
      />
    </div>
  );
};

export default Header;
