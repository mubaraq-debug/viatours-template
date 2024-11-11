import React from "react";
import ticket from "../../../assets/ticket.svg";
import baloon from "../../../assets/baloon.svg";
import diamond from "../../../assets/diamond.svg";
import medal from "../../../assets/medal.svg";
import WhyCard from "./whyCard";

const Choose = () => {
  return (
    <div className="my-20">
      <header className="text-3xl capitalize text-black font-bold">why viatours</header>

      <div className="flex items-center gap-[40px] pt-10">
        <WhyCard
          image={ticket}
          header="ultimate flexibility"
          text="You're in control, with free
cancellation and payment options to
satisfy any plan or budget."
        />

        <WhyCard
          image={baloon}
          header="memorable experiences"
          text="Browse and book tours and activities
so incredible, you'll want to tell your
friends."
        />

        <WhyCard
          image={diamond}
          header="quality at our core"
          text="High-quality standards. Millions of
reviews. A tourz company."
        />

        <WhyCard
          image={medal}
          header="award-winning support"
          text="New price? New plan? No problem.
We're here to help, 24/7."
        />
      </div>
    </div>
  );
};

export default Choose;
