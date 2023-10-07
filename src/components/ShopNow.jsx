import React from "react";

const ShopNow = () => {
  return (
    <div className="w-full h-screen ">
      <div className="py-10 max-w-[1240px] mx-auto ">
        <div className="text-center mx-auto">
          <h1 className="md:text-5xl text-4xl font-bold mb-5">Shop Now</h1>
          <p className="md:text-xl text-lg">
            There are various types of fashion shops that cater to different
            styles,
          </p>
          <p className="md:text-xl text-lg">budget, and target markets.</p>
        </div>
        <div className="card-container grid lg:grid-cols-3">
          <div className="each-card mb-5 mt-8 lg:mt-[100px] ">
            <div className="text-center">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] md:w-[280px] md:h-[330px]  bg-[#FE5F38] rounded-md relative rotate-[-10deg]"></div>
                <div className="absolute w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] md:w-[280px] md:h-[330px] bg-blue-600  rounded-md hover:rotate-[-10deg] duration-300">
                  <img
                    className="absolute w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] max-w-[100%] md:w-[280px] md:h-[330px] max-h-[100%] rounded-md"
                    src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold mt-6 text-2xl">Department Store</h1>
              <button className="p-2 my-2 bg-[#FE5F38] text-white rounded-md min-w-[80px] cursor-pointer">
                Shop now
              </button>
            </div>
          </div>

          <div className="each-card mb-5 mt-8 ">
            <div className="text-center">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-[250px] lg:w-[320px] h-[350px] lg:h-[400px] md:w-[280px] md:h-[330px] bg-[#FE5F38] rounded-md relative rotate-[-10deg]"></div>
                <div className="absolute w-[250px] lg:w-[320px] h-[350px] lg:h-[400px] md:w-[280px] md:h-[330px] bg-blue-600  rounded-md hover:rotate-[-10deg] duration-300">
                  <img
                    className="absolute w-[250px] lg:w-[320px] h-[350px] lg:h-[400px] md:w-[280px] md:h-[330px] max-w-[100%] max-h-[100%] rounded-md"
                    src="https://media.istockphoto.com/id/157505335/photo/applauding.webp?b=1&s=170667a&w=0&k=20&c=RXGIGGirj6l-ZZXxp4NF9BnoDe0jG45fvE5ik5y2H3o="
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold mt-12 text-2xl">Boutique</h1>
              <button className="p-2 my-2  bg-[#FE5F38] text-white rounded-md min-w-[80px] cursor-pointer">
                Shop now
              </button>
            </div>
          </div>

          <div className="each-card mb-5 mt-8 lg:mt-[100px] ">
            <div className="text-center">
              <div className="flex flex-col items-center justify-center ">
                <div className="w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] md:w-[280px] md:h-[330px] bg-[#FE5F38] rounded-md relative rotate-[-10deg]"></div>
                <div className="absolute w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] md:w-[280px] md:h-[330px] bg-blue-600  rounded-md hover:rotate-[-10deg] duration-300">
                  <img
                    className="absolute w-[250px] h-[350px] lg:w-[250px] lg:h-[300px] md:w-[280px] md:h-[330px] max-w-[100%] max-h-[100%] rounded-md"
                    src="  https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                  />
                </div>
              </div>
              <h1 className="font-bold mt-6 text-2xl">Department Store</h1>
              <button className="p-2 my-2 bg-[#FE5F38] text-white rounded-md min-w-[80px] cursor-pointer">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
