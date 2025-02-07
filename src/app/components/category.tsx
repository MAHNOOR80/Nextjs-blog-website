import React from 'react'
import Link from 'next/link'

const Category = () => {
  return (
    <div className='flex flex-row gap-7 pt-9 pl-72'>
      <Link href="/LivingroomDecor">  <button className='bg-[#da7509] shadow-2xl text-white font-semibold  rounded-full hover:bg-[#da7509c7] py-2 px-4 '>Living Room Decor</button></Link>
       <Link href='/BedroomInspirations'> <button className='bg-[#da7509] shadow-2xl text-white font-semibold  rounded-full hover:bg-[#da7509c7] py-2 px-4 '>Bedroom Inspiration</button></Link>
     <Link href="/DinningandKitchen">   <button className='bg-[#da7509] shadow-2xl text-white font-semibold  rounded-full hover:bg-[#da7509c7] py-2 px-4 '>Dining & Kitchen Design</button></Link>
    </div>
  )
}

export default Category