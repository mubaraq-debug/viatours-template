import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import Paris from "../../../assets/paris.svg";
import Singapore from "../../../assets/singapore.svg";
import Bali from "../../../assets/bali.svg";
import Bangkok from "../../../assets/bangkok.svg";
import Phuket from "../../../assets/phuket.svg";
import Rome from "../../../assets/rome.svg";

const Trending = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
  }, []);

  return (
    <div className="flex flex-col my-10 gap-10">
      <header
        className="text-3xl capitalize text-black font-bold"
        data-aos="fade-down"
      >
        Trending Destinations
      </header>
      <Container className="flex items-start gap-8 mb-10">
        <div
          className="flex flex-col gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <DestinationCard
            href="https://en.wikipedia.org/wiki/Paris"
            target="__blank"
          >
            <img src={Paris} alt="Paris" />
            <CityName>Paris</CityName>
          </DestinationCard>
          <DestinationCard href="#" data-aos="fade-up" data-aos-delay="400">
            <img src={Singapore} alt="Singapore" />
            <CityName>Singapore</CityName>
          </DestinationCard>
        </div>
        <div
          className="flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <DestinationCard href="#">
            <img src={Bali} alt="Bali" />
            <CityName>Bali</CityName>
          </DestinationCard>
          <div className="flex items-start gap-2">
            <DestinationCard href="#" data-aos="fade-right">
              <img src={Bangkok} alt="Bangkok" />
              <CityName>Bangkok</CityName>
            </DestinationCard>
            <DestinationCard href="#" data-aos="fade-left">
              <img src={Phuket} alt="Phuket" />
              <CityName>Phuket</CityName>
            </DestinationCard>
          </div>
        </div>
        <div data-aos="zoom-in">
          <DestinationCard href="#">
            <img src={Rome} alt="Rome" />
            <CityName>Rome</CityName>
          </DestinationCard>
        </div>
      </Container>
    </div>
  );
};

export default Trending;

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const DestinationCard = styled.a`
  position: relative;
  display: inline-block;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;

  img {
    border-radius: 4px;
    display: block;
    width: 100%;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const CityName = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;
