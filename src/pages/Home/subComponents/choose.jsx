import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // import the CSS for animations
import ticket from "../../../assets/ticket.svg";
import baloon from "../../../assets/baloon.svg";
import diamond from "../../../assets/diamond.svg";
import medal from "../../../assets/medal.svg";
import WhyCard from "./whyCard";

const Choose = () => {
  useEffect(() => {
    AOS.init({ duration: 4000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  return (
    <div className="my-20 w-full">
      <header className="text-3xl capitalize text-black font-bold" data-aos='fade-right'>why viatours</header>

      <div className="flex items-center justify-around pt-10">
        <WhyCard
          image={ticket}
          header="ultimate flexibility"
          text="You're in control, with free cancellation and payment options to satisfy any plan or budget."
          data-aos="fade-up"
        />
        <WhyCard
          image={baloon}
          header="memorable experiences"
          text="Browse and book tours and activities so incredible, you'll want to tell your friends."
          data-aos="fade-up"
          data-aos-delay="100" // Adds a delay to the animation for the second item
        />
        <WhyCard
          image={diamond}
          header="quality at our core"
          text="High-quality standards. Millions of reviews. A tourz company."
          data-aos="fade-up"
          data-aos-delay="200" // Adds a delay to the animation for the third item
        />
        <WhyCard
          image={medal}
          header="award-winning support"
          text="New price? New plan? No problem. We're here to help, 24/7."
          data-aos="fade-up"
          data-aos-delay="300" // Adds a delay to the animation for the fourth item
        />
      </div>
    </div>
  );
};

export default Choose;
