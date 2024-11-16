import { Divider, Rate } from 'antd';
import React from 'react';
import { motion } from 'framer-motion';

const TripCard = ({ location, header, num, days, price, image }) => {
  return (
    <div className='border border-1 rounded-2xl p-3 w-[280px] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:opacity-90'>
      <img src={image} alt="card-image" />
      <p className='text-[#717171] text-sm capitalize py-1'>{location}</p>
      <p className='text-md font-semibold'>{header}</p>

      <Rate className='text-sm' disabled allowHalf value={num} />

      <Divider />
      <div className='flex items-center justify-between'>
        <p className='font-normal text-sm'>{days} days</p>

        {/* Pulsing Price */}
        <motion.p 
          className="text-base font-medium capitalize pulse-animation" 
          initial={{ opacity: 1 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: Infinity }}
        >
          from <span className='text-2xl text-primary'>{price}</span>
        </motion.p>
      </div>
    </div>
  );
};

export default TripCard;
