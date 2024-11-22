import React from "react";
import molokini from "../../../assets/molokini.svg";
import arizona from "../../../assets/arizona.svg";
import westminster from "../../../assets/westminster.svg";
import circle from "../../../assets/circle-island.svg";
import TripCard from "./tripCard";

const FeaturedTrip = () => {
  return (
    <div className="md:my-10">
      <header className="text-3xl capitalize text-black/60 font-medium py-10">
        featured trips
      </header>

      <div className="flex md:flex-row flex-col items-center justify-between gap-4">
        <TripCard
          image={arizona}
          header="Centipede Tour - Guided Arizona
Desert Tour by ATV"
          num={3.5}
          price="$189.34"
          days={5}
          location="paris, france"
        />
        <TripCard
          image={molokini}
          header="Molokini and Turtle Town
Snorkeling Adventure Aboard"
          num={4.5}
          price="$280"
          days={3}
          location="new york, USA"
        />
        <TripCard
          image={westminster}
          header="Westminster Walking Tour &
Westminster Abbey Entry"
          num={5}
          price="$948"
          days={8}
          location="london, UK"
        />
        <TripCard
          image={circle}
          header="All Inclusive Ultimate Circle Island
Day Tour with Lunch"
          num={4.8}
          price="$771"
          days={1}
          location="new york, USA"
        />
      </div>
    </div>
  );
};

export default FeaturedTrip;
