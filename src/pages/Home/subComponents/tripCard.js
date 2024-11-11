import { Divider, Rate } from 'antd'
import React from 'react'

const TripCard = ({location, header, num, days, price, image}) => {
  return (
    <div className='border border-1 rounded-2xl p-3 w-[280px]'>
        <img src={image} alt="card-image" />
        <p className='text-[#717171] text-sm capitalize py-1'>{location}</p>
        <p className='text-md font-semibold'>{header}</p>

         <Rate className='text-sm' disabled allowHalf value={num} />

        <Divider />
        <div className='flex items-center justify-between'>
            <p className='font-normal text-sm'>{days} days</p>
            <p className='text-base font-medium capitalize'>from <span className='text-2xl text-primary'>{price}</span></p>
        </div>
    </div>
  )
}

export default TripCard