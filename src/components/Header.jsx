import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button';
import { Link } from 'react-router-dom'


const Header = () => {
    const {user, isSignedIn}=useUser();
  return (
    <div className='flex justify-between items-center shadow-sm p-5'>
        <img src='/megaphone-svgrepo-com.svg' width={100} height={80} />
        <ul className='hidden md:flex gap-16'>
            <Link to={'/profile'}> <button className='font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary'>Home</button> </Link>
            <Link to={'/contact'}> <button className='font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary'>Search</button> </Link>
            <button className='font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary'>New</button>
            <button className='font-bold hover:scale-105 transition-all cursor-pointer hover:text-primary'>Pre-Owned</button>
        </ul>
        {isSignedIn? 
        <div className='flex items-centergap-5 '>
            <UserButton/>
            <Link to={ '/profile' }>
            <Button>Check Products</Button>
            </Link>
                  
         
        </div>
        :
        <Link to={ '/profile' }>
        <Button>Check Products</Button>
        </Link>
        }
    </div>
  )
}

export default Header