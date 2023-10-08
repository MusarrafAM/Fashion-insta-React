import React from "react";
import {FiArrowUpRight} from "react-icons/fi"

const Footer = () => {
  return (
    <div className="bg-[#320001] w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
        <div className="first-half">
          <h1 className="text-[33px] leading-9 text-center lg:text-left pb-4 font-medium"> Have something to talk about <br/> with our professionals?</h1>
          <div className="p-2 my-2 rounded-full border border-[#8C7476] flex mx-auto lg:mx-0 max-w-[400px] justify-between">
            <input className="bg-[#320001] w-[300px]" type="text" placeholder="Your email here"/>
            <div className="bg-[#FE5F38] cursor-pointer rounded-full pt-[3px] pl-[2px] w-[25px] h-[25px]"><FiArrowUpRight size={20}/></div>
            </div>
          <div className="social-links flex text-[#8C7476] mt-20 justify-center lg:justify-normal">
            <div className="each-link py-1 px-4 my-2 cursor-pointer rounded-full border border-[#8C7476] flex justify-between hover:bg-[#FE5F38] hover:text-white duration-200">
              Whatsapp
              <FiArrowUpRight className=" ml-1 mt-[6px]"/>
            </div>

            <div className="each-link py-1 px-4 my-2 cursor-pointer rounded-full border border-[#8C7476] flex justify-between hover:bg-[#FE5F38] hover:text-white duration-200">
              Email
              <FiArrowUpRight className=" ml-1 mt-[6px]"/>
            </div>

            <div className="each-link py-1 px-4 my-2 cursor-pointer rounded-full border border-[#8C7476] flex justify-between hover:bg-[#FE5F38] hover:text-white duration-200">
              Twitter
              <FiArrowUpRight className=" ml-1 mt-[6px]"/>
            </div>

            <div className="each-link py-1 px-4 my-2 cursor-pointer rounded-full border border-[#8C7476] flex justify-between hover:bg-[#FE5F38] hover:text-white duration-200">
              Instagram
              <FiArrowUpRight className=" ml-1 mt-[6px]"/>
            </div>

            
          </div>
          
        </div>
        <div className="second-half grid grid-cols-3 ">
          <div className="ml-10">
            <h1 className="mb-8 text-lg">Menu</h1> 
            <ul>
                <li className="py-2 text-sm">About Us</li>
                <li className="py-2 text-sm">Newsroom</li>
                <li className="py-2 text-sm">Careers</li>
                <li className="py-2 text-sm">Partnerships</li>
            </ul>
          </div>

          <div className="ml-10">
            <h1 className="mb-8 text-lg">Get Help</h1> 
            <ul>
                <li className="py-2 text-sm">Support Carrer</li>
                <li className="py-2 text-sm">24h Service</li>
                <li className="py-2 text-sm">Quick Chat</li>
            </ul>
          </div>

          <div className="ml-10">
            <h1 className="mb-8 text-lg">Support</h1> 
            <ul>
                <li className="py-2 text-sm">FAQ</li>
                <li className="py-2 text-sm">policy</li>
                <li className="py-2 text-sm">Business</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
