import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const WhyCard = ({image, header, text}) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // Initialize AOS with settings
  }, []);

  return (
    <div
      className='w-[200px] flex flex-col gap-2 outline-none border-none'
      data-aos='fade-up' // Apply scroll animation to this element
    >
      <img src={image} alt="card-image" className='w-[60px] h-[60px]' />
      <p className='capitalize text-base font-medium text-[#999999]/90'>{header}</p>
      <p className='text-sm font-normal text-justify text-[#999999]/90'>{text}</p>
    </div>
  );
}

export default WhyCard;
