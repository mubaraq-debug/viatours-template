import React from "react";
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
    <Container
      className="flex flex-col items-center text-center py-32 px-4 md:px-8"
    >
      {/* Heading */}
      <h1 className="text-primary/70 font-bold capitalize leading-tight text-4xl md:text-5xl lg:text-6xl">
        Find Next Place To Visit
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-white pt-6 max-w-3xl">
        Discover amazing places at exclusive deals. Eat, Shop, and Visit
        interesting places around the world.
      </p>

      {/* Search Input */}
      <div className="w-full sm:w-[75%] md:w-[50%] lg:w-[35%] mt-7">
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
  height: 100%;
  width: 100%;
`;
