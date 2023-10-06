import React from "react";
import { EmblaCarousel } from "./EmblaCarousel";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[#FEF6F3] w-full h-screen">
      <Navbar />
      <div className="grid grid-cols-3 py-10 max-w-[1240px] mx-auto">
        <p className="hidden lg:block p-1 max-w-[300px]">
          Fashion is a form of self expression. It's a way to show the world who
          you are and what you stand for
        </p>
        <h1 className="text-center font-bold text-xl md:text-2xl col-span-3 lg:col-span-1">
          CHOOSE YOUR FASHION STYLE
        </h1>
        <div className="hidden lg:block lg:col-span-1 text-right p-1">
          <p className="cursor-pointer hover:text-[#FE5F38]">Instagram</p>
          <p className="cursor-pointer hover:text-[#FE5F38]">Facebook</p>
          <p className="cursor-pointer hover:text-[#FE5F38] w-auto">Twitter</p>
        </div>
      </div>
      {/* Carousel */}
      <div >
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Hero;
