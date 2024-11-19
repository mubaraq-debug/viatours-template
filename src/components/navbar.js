import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className={`py-5 flex items-center mx-auto max-w-[1200px] justify-between w-full sticky top-0 transition-all duration-300 ${
        isSticky ? "shadow-md px-4" : "bg-transparent"
      }`}
      data-aos="fade-down" // Animation on scroll
    >
      {/* Logo */}
      <div className="logo" data-aos="fade-left">
        <img src={logo} alt="logo" className="w-[130px] h-[30px]" />
      </div>

      {/* Desktop Nav Items */}
      <ul
        className={`hidden md:flex text-white items-center gap-x-10`}
        data-aos="fade-right"
      >
        <Link to="/" className="capitalize font-medium text-md hover:text-primary">
          home
        </Link>
        <Link
          to="/destination"
          className="capitalize font-medium text-md hover:text-primary"
        >
          destination
        </Link>
        <Link
          to="/activities"
          className="capitalize font-medium text-md hover:text-primary"
        >
          activities
        </Link>
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden text-white cursor-pointer"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="text-xl">&#9776;</span>
      </div>

      {/* Buttons */}
      <div className="hidden md:block btns" data-aos="fade-left">
        <Button
          size="large"
          className="capitalize bg-primary text-white font-medium hover:bg-white hover:border-1 hover:border-primary hover:text-primary"
        >
          get started
        </Button>
      </div>

      {/* Mobile Nav Items */}
      {isMobileMenuOpen && (
        <ul
          className="absolute top-16 left-0 w-full bg-transparent flex flex-col items-start px-5 gap-y-5 py-10 md:hidden bg-[#6a8ee2]"
          data-aos="fade-down"
          style={{opacity: .9}}
        >
          <Link to="/" className="capitalize font-medium text-md text-white">
            home
          </Link>
          <Link
            to="/destination"
            className="capitalize font-medium text-md text-white"
          >
            destination
          </Link>
          <Link
            to="/activities"
            className="capitalize font-medium text-md text-white"
          >
            activities
          </Link>
          <Button
            size="medium"
            className="capitalize bg-primary text-white font-medium hover:bg-white hover:border-1 hover:border-primary hover:text-primary"
          >
            get started
          </Button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
