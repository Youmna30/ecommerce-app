import React from "react";
import logo from "@/images/logo.svg";
const NavBarBottom = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="h-18 flex items-center justify-between">
        <img src={logo.src} alt="logo" />
      </div>
    </div>
  );
};

export default NavBarBottom;
