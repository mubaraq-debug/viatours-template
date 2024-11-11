import React from "react";
import hero from "../../../assets/hero.png";
import styled from "styled-components";
import { Input } from "antd";

const { Search } = Input;

const Hero = () => {
  const onSearch = (value) => {
    console.log("search value:", value);
  };

  return (
    <Container className="flex items-center flex-col py-[220px]">
      <h1 className="text-white text-6xl capitalize font-semibold">
        your world of joy
      </h1>
      <p className="text-xl text-white pt-6">
        From local escapes to far-flung adventures, find what makes you happy
        anytime, anywhere
      </p>

      <div className="w-[55%] mt-7">
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
  border-radius: 4px;
`;
