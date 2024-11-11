import React from 'react'

const PopularCard = ({icon, title, text}) => {
  return (
    <div className='bg-white rounded-sm p-5 w-[150px] flex flex-col items-center justify-center'>
        <div className='icon-area flex w-fit justify-center p-3 bg-[#FEF7F4] rounded-full'>
            <img src={icon} alt="icon-image" className='w-[30px] h-[30px]' />
        </div>
        <p className='font-medium text-sm capitalize'>{title}</p>
        <p className='text-xs capitalize'>{text}</p>
    </div>
  )
}

export default PopularCard