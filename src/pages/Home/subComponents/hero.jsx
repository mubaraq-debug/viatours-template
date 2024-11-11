import React from "react";
// import hero from "../../../assets/hero.png";
import hero from "../../../assets/new-hero.png";
import styled from "styled-components";
import { Input } from "antd";
import Navbar from "../../../components/navbar";

const { Search } = Input;

const Hero = () => {
  const onSearch = (value) => {
    console.log("search value:", value);
  };

  return (
    <Container className="flex items-center flex-col py-[270px]">
      <h1 className="text-primary/70 text-6xl capitalize font-bold">
      Find Next PlaceTo Visit
      </h1>
      <p className="text-xl font-semibold text-white pt-6">
      Discover amzaing places at exclusive deals.Eat, Shop, Visit
      interesting places around the world.
      </p>

      <div className="w-[35%] mt-7">
        <Search
          placeholder="Search Tourist Attraction"
          allowClear
          enterButton="Search"
          onSearch={onSearch}
          size="large"
        />
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  background: url(${hero});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  // border-radius: 4px;
`;
