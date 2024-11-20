import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar";
import Hero from "./subComponents/hero";
import Choose from "./subComponents/choose";
import Trending from "./subComponents/trending";
import Popular from "./subComponents/popular";
import FeaturedTrip from "./subComponents/featuredTrip";
import Advert from "./subComponents/advert";
import Testimonials from "./subComponents/testimonials";
import Article from "./subComponents/article";
import Offers from "./subComponents/offers";
import Subscription from "./subComponents/subscription";
import Footer from "../../components/footer";

import LoadingSpinner from "../../components/default/loading";
import styled from "styled-components";
import hero from '../../assets/new-hero.png'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {/* <div className="bg-transparent h-4 w-full"></div> */}
          <Container className="flex items-center flex-col mx-auto my-auto px-10 overflow-hidden">
            <Navbar />
            <Hero />
          </Container>
          <div className="flex items-center flex-col mx-auto my-auto p-0 max-w-[1200px] overflow-hidden">
              <Choose />
              <Trending />
              <Popular />
              <Offers />
              <FeaturedTrip />
              <Article />
              <Advert />
              <Testimonials />
              <Subscription />
              <Footer />
            </div>
        </div>
      )}
    </div>
  );
};

export default Home;

const Container = styled.div`
  background: url(${hero});
  background-size: cover;
  background-position: center;

  @media (max-width: 767px) {
  background-size: 100vw 100%;
  background-position: center;
  background-repeat: no-repeat;
  }
  `
