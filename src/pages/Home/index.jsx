import React from "react";
import { Button } from "antd";
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

const Home = () => {
  return (
    <div className="flex items-center flex-col mx-auto my-auto p-0 max-w-[1200px]">
     <Navbar />
     <Hero />
     <Choose />
     <Trending />
     <Popular />
     <FeaturedTrip />
     <Advert />
     <Testimonials />
     <Article />
     <Offers />
     <Subscription />
     <Footer />
    </div>
  );
};

export default Home;
