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

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center flex-col mx-auto my-auto p-0 max-w-[1200px] overflow-hidden">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <div className="bg-transparent h-4 w-full"></div>
          <div className="sticky top-0">
            <Navbar />
            <Hero />
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
