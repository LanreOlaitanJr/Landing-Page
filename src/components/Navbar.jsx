import React from 'react'
import logo from '../assets/landing-logo.png'
import { FaRegUser,FaSearch,FaRegHeart, } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[80px] flex items-center px[6px] justify-around shadow'>
      <div className='flex'>
        <img src={logo} alt="" />
        <p className='text-[35px] font-semibold'>Furniro</p>
      </div>
      <div className='flex justify-between w-[400px]'>
        <a href="">Home</a>
        <a href="">Shop</a>
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
      <div className='flex justify-around w-[250px]'>
      <FaRegUser className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer' />
      <IoSearch className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer'/>
      <FaRegHeart className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer'/>
      <MdOutlineShoppingCart className='p-1 hover:rounded-full hover:bg-red-200 text-3xl cursor-pointer'/>
      </div>
    </nav>
  )
}

export default Navbar
