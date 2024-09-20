import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

import { Separator } from "@/components/ui/separator"
import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';

  

const Search = () => {
  return (
    <div className='p-2 pd-5 bg-white rounded-md md:rounded-full flex-col 
    md:flex md:flex-row gap-10 px-5 items-center w-[60%] '>
        <Select>
        <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Condition" />
        </SelectTrigger>
        <SelectContent>
            <SelectItem value="light">New</SelectItem>
            <SelectItem value="dark">Old</SelectItem>
            
        </SelectContent>
        </Select>
        
        <Separator orientation="vertical" className= "hidden md:block"/>

        <Select>
        <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder=" Instrument Types" />
        </SelectTrigger>
        <SelectContent>
            {Data.instType.map((Instrument, index)=> (<SelectItem value={Instrument.name}>{Instrument.name}</SelectItem>))}
            
        </SelectContent>
        </Select>
        <Separator orientation="vertical " className="hidden md:block"/>


        <Select>
        <SelectTrigger className="outline-none border-none w-full shadow-none text-lg">
            <SelectValue placeholder="Pricing" />
        </SelectTrigger>
        <SelectContent>
            {Data.Pricing.map((Prices, index)=> (<SelectItem value={Prices.amount}>{Prices.amount}</SelectItem>))}
            
           
        </SelectContent>
        </Select>
        <div>
        <CiSearch  className='bg-primary rounded-full p-4 text-[50px] text-white hover:scale-105 transition-all cursor-pointer' />
        </div>
    </div>
  )
}

export default Search