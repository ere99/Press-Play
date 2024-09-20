import React from 'react'
import { ReactTyped } from 'react-typed'
import Search from './Search'


const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[650px] w-full bg-[#a99065]'>
            <h2 className='text-lg font-semibold'>{<ReactTyped className= 'md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2' 
            strings={[ 'Get the Musical Instrument You Dream of']} typeSpeed={150} backSpeed={100} loop   />}</h2>
            <h2 className='text-[60px] font-bold'>Locate the nearest music store to you</h2>
            <Search />
            
            <img src='/musicstore.png' className='mt-10'  />
        </div>
    </div>
  )
}

export default Hero