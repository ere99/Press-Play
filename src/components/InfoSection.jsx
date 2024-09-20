import React from 'react'

const InfoSection = () => {
  return (
    <section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <header className="text-center">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Purchase Modes</h2>
  
        <p className="mx-auto mt-4 max-w-md text-gray-500">
         Depending on your budget and preferences, methods have been Curated specially for you, where you will be able to purchase your dream musical instrumnets at your convinience at a location closest to you. 
        </p>
      </header>
  
      <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li>
          <a href="#" className="group relative block">
            <img
              src="/Buyer.jpg"
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h2 className="text-xl font-medium text-white">Hand-Hand Buy </h2>
              <h4 className='text-black font-bold font'>Buy your choice musical instrument from a person who is willing to sell you thier used insttrument</h4>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Contact a Seller Now
              </span>
            </div>
          </a>
        </li>
  
        <li>
          <a href="#" className="group relative block">
            <img
              src="/Local.jpeg"
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h2 className="text-xl font-medium text-red">Local Stores </h2>
              <h4 className='teaxt-md font-medium text-white '>Support local businesses close to you by purchasing your musical instrument here</h4>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop Now
              </span>
            </div>
          </a>
        </li>
  
        <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <a href="#" className="group relative block">
            <img
              src="/LargeMusic.jpg"
              alt=""
              className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
            />
  
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
              <h2 className="text-xl font-bold text-black">Large Stores</h2>
              <h4 className='text-md font-semibold text-white'>Looking to make a large purchase of musical instruments or do you search for musical instruments of exclusive brands? Try the largest musical store close to you</h4>
  
              <span
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
              >
                Shop Now
              </span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
  
  )
}

export default InfoSection