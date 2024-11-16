import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer

const AdvertCard = ({ image, header, text }) => {
  const [count, setCount] = useState(1);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once when it first comes into view
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      const targetNumber = header; // Assume header contains the number to animate
      let start = 1;
      const end = targetNumber;
      const duration = 2; // Animation duration in seconds
      const stepTime = Math.abs(Math.floor(duration * 1000 / (end - start)));

      const counter = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < end) {
            return prevCount + 1;
          } else {
            clearInterval(counter); // Stop the interval once the target is reached
            return end;
          }
        });
      }, stepTime);

      return () => clearInterval(counter); // Clean up interval on unmount
    }
  }, [inView, header]); // Only run when the element comes into view

  return (
    <motion.div
      ref={ref} // Attach the ref to the card element for Intersection Observer
      className="flex flex-col items-center justify-center gap-3 bg-white rounded-xl w-[220px] py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1.05 }}
      transition={{ duration: 0.5 }}
    >
      <img src={image} alt="card-image" />
      <motion.p
        className="text-primary text-xl capitalize font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span className="text-3xl font-semibold">{count}</span> {/* Animated number */}
      </motion.p>
      <p className="text-black capitalize">{text}</p>
    </motion.div>
  );
};

export default AdvertCard;
