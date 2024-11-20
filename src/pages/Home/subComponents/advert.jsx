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
    <Container className="md:py-[80px] md:px-[50px] px-10 py-16 flex flex-col md:flex-row items-start justify-evenly my-20">
      <div className="text flex flex-col items-center md:items-start">
        <h1 className="text-6xl text-white font-medium text-center md:text-left">
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
      <div className="boxes flex flex-col py-10 md:py-0 md:flex-row items-center justify-center gap-4">
        <div className="left flex flex-col gap-4">
          <AdvertCard image={dest} header={240} text="total destinations" />
          <AdvertCard image={happy} header={842} text="happy customer" />
        </div>
        <div className="right">
          <AdvertCard image={person} header={72} text="amazing tours" />
        </div>
      </div>
    </Container>
  );
};

export default Advert;

const Container = styled.div`
  position: relative;
  background: url(${frame}) no-repeat center center/cover;
  height: 100%;
  width: 100%;
  padding: 80px 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  my: 20px;
  
  /* Gradient Overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Dark overlay for readability */
    z-index: -1;
  }

  /* Parallax effect */
  background-attachment: fixed;
  background-position: center;
`;

