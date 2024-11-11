import React from "react";
import bg from "../../../assets/mailing-bg.png";
import styled from "styled-components";
import { Button, Input } from "antd";

const Subscription = () => {
  return (
    <Container className="py-[80px] px-[150px] text-left">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl text-white font-bold leading-normal">
          Subscribe To Our Mailing List <br /> And Stay Up To Date
        </h1>
        <p className="text-white text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <div className="w-[360px] flex items-center justify-between rounded-xl shadow-xl p-2 border-1 bg-[#5f58ec67] mt-5">
          <input placeholder="Enter your email" size="large" className="bg-transparent outline-none border-0 text-white w-full px-2" />
          <Button type="default" size="large" className="bg-white text-black font-medium outline-none capitalize">
            subscribe
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;

const Container = styled.div`
  background: url(${bg});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  border-radius: 4px;
`;
