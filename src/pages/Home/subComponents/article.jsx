import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import kenya from '../../../assets/kenya.png';
import adventure from '../../../assets/adventure.png';
import safari from '../../../assets/safari.png';
import ArticleCard from "./articleCard";

const Article = () => {
  useEffect(() => {
    AOS.init({ duration: 5000, once: false }); // Initialize AOS with custom settings
  }, []);

  return (
    <div className="my-10 flex flex-col items-start mb-10 w-full">
      <header className="text-3xl capitalize text-black font-medium py-10">travel articles</header>
        
      <div className="flex items-start justify-between gap-4">
        <ArticleCard
          image={kenya}
          date='April 06 2024'
          name='Ali Tufan'
          title='Kenya vs Tanzania Safari: The Better African Safari Experience'
          data-aos="fade-up" // Apply scroll animation
        />
        <ArticleCard
          image={adventure}
          date='April 06 2024'
          name='Emily Johnson'
          title='Exploring the Serengeti: A Wildlife Adventure'
          data-aos="fade-up"
        />
        <ArticleCard
          image={safari}
          date='April 06 2024'
          name='Maxwell Rhodes'
          title='Into the Wild: An Unforgettable Safari Journey'
          data-aos="fade-up"
        />
      </div>
    </div>
  );
};

export default Article;
