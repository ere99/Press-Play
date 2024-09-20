import React from 'react'
import Data from '@/Shared/Data';


const Category = () => {
  return (
    <div className='mt-40'>
        <h2  className='font-bold text-3xl text-center mb-6 '>Browse By Type</h2>
        <div className='max-w-[1240px] mx-auto my-10 grid md:grid-cols-6 gap-8 hover:cursor-pointer'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/piano-svgrepo-com.svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Piano</h2>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/saxophone-svgrepo-com(1).svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Saxophone</h2>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/guitar-svgrepo-com.svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Guitar</h2>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/harp-svgrepo-com.svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Strings</h2>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/trumpet-svgrepo-com.svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Trumpet</h2>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src='/xylophone-or-glockenspiel-svgrepo-com.svg' alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Traditional</h2>
        </div>

        </div>
       
       
        
    </div>
  )
}

export default Category