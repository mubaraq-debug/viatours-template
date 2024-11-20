import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for animations
import ticket from "../../../assets/ticket.svg";
import baloon from "../../../assets/baloon.svg";
import diamond from "../../../assets/diamond.svg";
import medal from "../../../assets/medal.svg";
import WhyCard from "./whyCard";

const Choose = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with a 2-second animation duration
  }, []);

  return (
    <div className="my-20 w-full">
      <header
        className="text-3xl capitalize text-black font-medium text-center -ml-14 md:text-left"
        data-aos="fade-right"
      >
        why viatours
      </header>

      <div
        className="flex flex-col md:flex-row items-center justify-around pt-10 gap-10"
        data-aos="fade-up"
      >
        <WhyCard
          image={ticket}
          header="ultimate flexibility"
          text="You're in control, with free cancellation and payment options to satisfy any plan or budget."
        />
        <WhyCard
          image={baloon}
          header="memorable experiences"
          text="Browse and book tours and activities so incredible, you'll want to tell your friends."
          data-aos-delay="100"
        />
        <WhyCard
          image={diamond}
          header="quality at our core"
          text="High-quality standards. Millions of reviews. A tourz company."
          data-aos-delay="200"
        />
        <WhyCard
          image={medal}
          header="award-winning support"
          text="New price? New plan? No problem. We're here to help, 24/7."
          data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default Choose;
