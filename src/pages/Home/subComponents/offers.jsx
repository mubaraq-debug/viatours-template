import React from "react";
import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";
import offer3 from "../../../assets/offer3.png";
import { Button } from "antd";
import "../../../styles/marquee.css";

const Offers = () => {
  const items = [
    {
      id: 1,
      image: offer1,
    },
    {
      id: 2,
      image: offer2,
    },
    {
      id: 3,
      image: offer3,
    },
    {
      id: 4,
      image: offer1,
    },
    {
      id: 5,
      image: offer2,
    },
    {
      id: 6,
      image: offer3,
    },
  ];
  return (
    <div className="my-10 w-full">
      <header className="mb-10">
        <h1 className="text-3xl font-medium capitalize">special offers</h1>
      </header>

      <div className="marquee">
      <div className="marquee-content">
        {items.map((item) => (
          <div key={item.id} className="marquee-item">
            <img src={item.image} alt={`Offer ${item.id}`} className="offer-image" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Offers;
