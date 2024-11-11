import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ date, name, title, image }) => {
  return (
    <a href="/" className="p-3">
      <img src={image} alt="card-image" className="w-[400px] h-[210px]" />
      <div className="flex gap-1 items-center text-sm capitalize">
        <p className="text-[#717171] py-1">{date}</p>
        <p className="text-[#e7e6e6]">|</p>
        <p>by {name}</p>
      </div>
      <h4 className="font-medium text-base">{title}</h4>
    </a>
  );
};

export default ArticleCard;
