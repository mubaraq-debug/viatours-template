import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const ArticleCard = ({ date, name, title, image }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
  }, []);
  return (
    <a href="/" className="p-3" data-aos='fade-up'>
      <img src={image} alt="card-image" className="w-[400px] h-[210px]" />
      <div className="flex gap-1 items-center text-sm capitalize">
        <p className="text-[#717171] py-1">{date}</p>
        <p className="text-[#e7e6e6]">|</p>
        <p>by {name}</p>
      </div>
      <h4 className="font-medium text-base underline">{title}</h4>
    </a>
  );
};

export default ArticleCard;
