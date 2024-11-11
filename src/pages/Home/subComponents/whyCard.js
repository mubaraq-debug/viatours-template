import React from 'react'

const WhyCard = ({image, header, text}) => {
  return (
    <div className='w-[250px]'>
        <img src={image} alt="card-image" className='w-[50px] h-[50px]' />
        <p className='capitalize text-base font-medium'>{header}</p>
        <p className='text-sm font-normal text-justify'>{text}</p>
    </div>
  )
}

export default WhyCard;