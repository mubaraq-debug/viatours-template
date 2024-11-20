import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaTiktok } from "react-icons/fa";
import { Divider } from "antd";
import logo from '../../src/assets/logo.png'

const Footer = () => {
  const companies = [
    {
      link: <Link to="/">about us</Link>,
    },
    {
      link: <Link to="/">tours reviews</Link>,
    },
    {
      link: <Link to="/">contact us</Link>,
    },
    {
      link: <Link to="/">travel guides</Link>,
    },
    {
      link: <Link to="/">data policy</Link>,
    },
    {
      link: <Link to="/">cookie policy</Link>,
    },
    {
      link: <Link to="/">legal</Link>,
    },
    {
      link: <Link to="/">site map</Link>,
    },
  ];

  const supports = [
    {
      link: <Link to="/">get in touch</Link>,
    },
    {
      link: <Link to="/">help center</Link>,
    },
    {
      link: <Link to="/">live chat</Link>,
    },
    {
      link: <Link to="/">how it works</Link>,
    },
  ];
  return (
    <footer className="bg-[#05073C] w-full text-white py-20 flex flex-col md:flex-row items-start justify-around px-10 md:px-24 gap-10">
      <div className="contact flex flex-col gap-3">
        <header>
            <img src={logo} alt="logo-image" className="w-[120px] h-[30px]" />
        </header>
        <address className="text-sm font-thin">
          328 Queensberry Street, North Melbourne VIC3051, Australia.
        </address>
        <a href="/" className="font-medium text-base">hi@viatours.com</a>
      </div>
      <div className="company flex flex-col">
        <header className="pb-2 capitalize font-medium text-xl">company</header>

        {companies.map((obj) => (
          <div>
            <p className="pb-1 text-base font-thin capitalize">{obj.link}</p>
          </div>
        ))}
      </div>
      <div className="support">
        <header className="pb-2 capitalize font-medium text-xl">support</header>

        {supports.map((obj) => (
          <div>
            <p className="pb-1 text-base font-thin capitalize">{obj.link}</p>
          </div>
        ))}
      </div>
      <div className="socials">
         <header className="pb-2 capitalize font-medium text-xl">follow us on:</header>
         <div className="flex items-center justify-between">
            <FaFacebook className="text-xl cursor-pointer" />
            <FaTwitter className="text-xl cursor-pointer" />
            <FaInstagram className="text-xl cursor-pointer" />
            <FaPinterest className="text-xl cursor-pointer" />
            <FaTiktok className="text-xl cursor-pointer" />
         </div>
      </div>

      {/* <Divider />

      <div>
        <p>&copy; viatours 2024</p>
      </div> */}
    </footer>
  );
};

export default Footer;
