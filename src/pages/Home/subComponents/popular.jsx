import React from "react";
import PopularCard from "./popularCard";
import city from "../../../assets/city.svg";
import cultural from "../../../assets/cultural.svg";
import cruises from "../../../assets/cruise.svg";
import bus from "../../../assets/bus.svg";
import beach from "../../../assets/beach.svg";
import food from "../../../assets/food.svg";

const Popular = () => {
  return (
    <div className="flex flex-col items-start gap-7 my-10">
        <header className="capitalize text-3xl font-bold">popular things to do</header>
      <div className="flex items-center justify-center gap-5">
        <PopularCard icon={city} title="city tours" text="100+ tours" />
        <PopularCard icon={cultural} title="cultural tours" text="100+ tours" />
        <PopularCard icon={cruises} title="day cruises" text="100+ tours" />
        <PopularCard icon={bus} title="bus tours" text="100+ tours" />
        <PopularCard icon={beach} title="beach tours" text="100+ tours" />
        <PopularCard icon={food} title="food tours" text="100+ tours" />
      </div>
    </div>
  );
};

export default Popular;
