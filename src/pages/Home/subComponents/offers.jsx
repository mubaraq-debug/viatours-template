import React from 'react'
import offer1 from '../../../assets/offer1.png'
import offer2 from '../../../assets/offer2.png'
import offer3 from '../../../assets/offer3.png'
import { Button } from 'antd'



const Offers = () => {
  return (
    <div className='mt-5 mb-14'>
        <header className='flex items-center justify-between mb-10'>
            <h1 className='text-3xl font-medium capitalize'>special offers</h1>
            <Button className='text-xl capitalize' size='medium'>see all</Button>
        </header>

        <main className="pics flex gap-10 items-center justify-between">
            <img className='w-[350px]' src={offer1} alt="offer-pic" />
            <img className='w-[350px]' src={offer2} alt="offer-pic" />
            <img className='w-[350px]' src={offer3} alt="offer-pic" />
        </main>
    </div>
  )
}

export default Offers