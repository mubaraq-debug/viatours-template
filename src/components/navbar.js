import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Button } from "antd";

const Navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between w-full">
      {/* logo */}
      <div className="logo">
        <img src={logo} alt="logo" className="w-[140px] h-[32px]" />
      </div>

      {/* nav items */}
      <ul className="flex items-center gap-x-10">
        <Link to="/" className="capitalize font-normal text-base">home</Link>
        <Link to="/" className="capitalize font-normal text-base">destination</Link>
        <Link to="/" className="capitalize font-normal text-base">activities</Link>
      </ul>

      {/* buttons */}
      <div className="btns">
        <Button size="medium" className="capitalize bg-primary text-white font-normal hover:bg-white hover:border-1 hover:border-primary hover:text-primary">get started</Button>
      </div>
    </nav>
  );
};

export default Navbar;
