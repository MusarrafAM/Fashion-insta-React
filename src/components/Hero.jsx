import React from "react";
import { EmblaCarousel } from "./EmblaCarousel";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero bg-[#FEF6F3] w-full">
      <Navbar />
      <div className="grid md:grid-cols-3 py-10 max-w-[1240px] mx-auto ">
        <p className="md:hidden lg:block p-1 max-w-[300px] order-3 md:order-none ml-[100px] md:ml-0 mt-10 md:mt-0 ">
          Fashion is a form of self expression. It's a way to show the world who
          you are and what you stand for
        </p>
        <h1 className="text-center font-bold text-xl md:text-2xl  col-span-3 lg:col-span-1 my-auto">
          CHOOSE YOUR FASHION STYLE
        </h1>
        <div className="hidden lg:block lg:col-span-1 text-right p-1">
          <p className="cursor-pointer hover:text-[#FE5F38]">Instagram</p>
          <p className="cursor-pointer hover:text-[#FE5F38]">Facebook</p>
          <p className="cursor-pointer hover:text-[#FE5F38] w-auto">Twitter</p>
        </div>
      </div>
      {/* Carousel */}
      <div className="pt-[120px] md:pt-[20px]">
        <EmblaCarousel />
      </div>
    </div>
  );
};

export default Hero;
