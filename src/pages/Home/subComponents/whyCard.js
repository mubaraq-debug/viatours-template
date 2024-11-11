import React from 'react'

const WhyCard = ({image, header, text}) => {
  return (
    <div className='w-[250px] flex flex-col gap-2 outline-none border-none'>
        <img src={image} alt="card-image" className='w-[60px] h-[60px]' />
        <p className='capitalize text-base font-medium'>{header}</p>
        <p className='text-sm font-normal text-justify'>{text}</p>
    </div>
  )
}

export default WhyCard;