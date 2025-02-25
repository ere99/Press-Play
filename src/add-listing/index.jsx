import React from 'react'
import Header from '@/components/Header'

const AddListing = () => {
  return (
    <div>
        <Header />
        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>
            <form className='pd-10 border rounded-xl mt-10'>
                {/*Instrument Details */}
                <div>
                    <h2 className='font-medium text-xl mb-6'>Instrument Details</h2>
                </div>
                {/*Features List */}

                {/*Instrument Images */}
            </form>
        </div>
    </div>
  )
}

export default AddListing