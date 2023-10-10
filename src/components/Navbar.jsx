import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 lg:px-0 text-black border-b-2 border-b-[#5C5958] ">
      <h1 className="w-full text-3xl font-bold text-[#5C5958] font-serif">Fashionista</h1>
      <ul className="hidden md:flex bg-[#310000] text-white rounded-2xl lg:mr-[350px] md:mr-[50px] text-center">
        <li className="p-2 my-2 mr-2 ml-2 hover:bg-[#FE5F38] duration-300 rounded-lg min-w-[80px] cursor-pointer">Home</li>
        <li className="p-2 my-2 mr-2 hover:bg-[#FE5F38] duration-300 rounded-lg min-w-[80px] cursor-pointer">Men</li>
        <li className="p-2 my-2 mr-2 hover:bg-[#FE5F38] duration-300 rounded-lg min-w-[80px] cursor-pointer">Women</li>
        <li className="p-2 my-2 mr-2 hover:bg-[#FE5F38] duration-300 rounded-lg min-w-[80px] cursor-pointer">Kids</li>
        <li className="p-2 my-2 mr-2 hover:bg-[#FE5F38] duration-300 rounded-lg min-w-[80px] cursor-pointer">Login</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {/* This size is react icon property */}
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed z-10 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#310000] text-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#5C5958] m-4 font-serif">Fashionista</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#FE5F38] rounded-lg" onClick={handleNav}>Home</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#FE5F38] rounded-lg" onClick={handleNav}>Men</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#FE5F38] rounded-lg" onClick={handleNav}>Women</li>
          <li className="p-4 border-b border-b-gray-600 cursor-pointer hover:bg-[#FE5F38] rounded-lg" onClick={handleNav}>Kids</li>
          <li className="p-4 cursor-pointer hover:bg-[#FE5F38] rounded-lg" onClick={handleNav}>Login</li>
        </ul>
      </div>
    </div>
  ); 
};

export default Navbar;
