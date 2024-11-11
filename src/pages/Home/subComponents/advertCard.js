import React from 'react'

const AdvertCard = ({image, header, text}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 bg-white rounded-xl w-[200px] py-3'>
        <img src={image} alt="card-image" />
        <p className='text-primary text-xl capitalize font-bold'>{header}</p>
        <p className='text-black capitalize'>{text}</p>
    </div>
  )
}

export default AdvertCard