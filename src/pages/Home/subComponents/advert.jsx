import React from "react";
import styled from "styled-components";
import frame from "../../../assets/Frame.svg";
import { Button } from "antd";
import AdvertCard from "./advertCard";
import dest from "../../../assets/dest.svg";
import happy from "../../../assets/happy.svg";
import person from "../../../assets/person.svg";

const Advert = () => {
  return (
    <Container className="py-[80px] px-[50px] flex items-center justify-evenly my-20">
      <div className="text">
        <h1 className="text-6xl text-white font-medium">
          We Make <br /> World Travel Easy
        </h1>
        <p className="text-base text-white/80 font-normal w-[350px] py-10">
          Traveling under your own power and at your own pace, you'll connect
          more meaningfully with your destination and have more fun!
        </p>
        <Button className="text-primary capitalize" size="large">
          explore our tours
        </Button>
      </div>
      <div className="boxes flex items-center justify-center gap-4">
        <div className="left flex flex-col gap-4">
          <AdvertCard image={dest} header={240} text="total destinations" />
          <AdvertCard image={happy} header={92842} text="happy customer" />
        </div>
        <div className="right">
          <AdvertCard image={person} header={3672} text="amazing tours" />
        </div>
      </div>
    </Container>
  );
};

export default Advert;

const Container = styled.div`
  background: url(${frame});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`;
