"use client"
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathName = useParams();
  return (
   <div className='container mx-auto w-11/12 bg-red-500 '>
     <div className='p-4 flex text-white '>
      
      <h1 className='text-3xl font-bold'>My Blog</h1>
      <div className='flex  '>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/profile">Profile</Link></li>
       
       
      </div>
      <div className='space-x-4 '>
        <a href="/about">Login</a>
        <a href="/contact">Signup</a>
      </div>
    </div>
   </div>

  );
};

export default Navbar;