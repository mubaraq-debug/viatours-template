import React from "react";
import kenya from '../../../assets/kenya.png'
import adventure from '../../../assets/adventure.png'
import safari from '../../../assets/safari.png'
import ArticleCard from "./articleCard";

const Article = () => {
  return (
    <div className="my-10 bg-[#f5f5f5] py-[100px] px-[150px] flex flex-col items-start mb-10">
      <header className="text-3xl capitalize text-black font-semibold py-10">travel articles</header>
        
      <div className="flex items-center justify-between gap-4">
        <ArticleCard
          image={kenya}
          date='April 06 2024'
          name='Ali Tufan'
          title='Kenya vs Tanzania Safari: The Better African Safari Experience'
        />
        <ArticleCard
          image={adventure}
          date='April 06 2024'
          name='Emily Johnson'
          title='Exploring the Serengeti: A Wildlife Adventure'
        />
        <ArticleCard
          image={safari}
          date='April 06 2024'
          name='Maxwell Rhodes'
          title='Into the Wild: An Unforgettable Safari Journey'
        />
      </div>
    </div>
  );
};

export default Article;
