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
    <div className="bg-[#FEF7F4] w-full py-[120px] flex flex-col gap-7">
        <header className="capitalize text-3xl font-semibold ml-[103px]">popular things to do</header>
      <div className="flex items-center justify-center gap-5 mb-10">
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
