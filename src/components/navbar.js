import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import logo from '../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with custom settings
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-5 flex items-center justify-between w-full sticky top-0 transition-all duration-300 ${
        isSticky ? "bg-[#f4f4f4] px-2" : "bg-transparent"
      }`}
      data-aos="fade-down" // Animation on scroll
    >
      {/* logo */}
      <div className="logo" data-aos="fade-left">
        <img src={logo} alt="logo" className="w-[130px] h-[30px]" />
      </div>

      {/* nav items */}
      <ul className="flex items-center gap-x-10" data-aos="fade-right">
        <Link to="/" className="capitalize font-medium text-md">
          home
        </Link>
        <Link to="/" className="capitalize font-medium text-md">
          destination
        </Link>
        <Link to="/" className="capitalize font-medium text-md">
          activities
        </Link>
      </ul>

      {/* buttons */}
      <div className="btns" data-aos="fade-left">
        <Button
          size="large"
          className="capitalize bg-primary text-white font-medium hover:bg-white hover:border-1 hover:border-primary hover:text-primary"
        >
          get started
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
