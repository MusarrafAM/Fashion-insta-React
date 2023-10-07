import React from "react";

const Values = () => {
  return (
    <div className="w-full py-16 px-4 lg:h-screen ">
      <div className="values-container max-w-[1240px] mx-auto ">
        <div className="my-4 text-center">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Top Values For You
          </h1>
          <p>
            The fashion service offers innovative and unique styles that go
            beyond conventional fashion trends.
          </p>
        </div>

        <div className="cards-container grid grid-cols-3 gap-6">
          <div className="card bg-[#FEF6F3] text-center py-4 px-4 text-[#5C5958] col-span-3 lg:col-span-1">
            <img
              className="rounded-[15px] inline"
              src="https://media.istockphoto.com/id/157505335/photo/applauding.webp?b=1&s=170667a&w=0&k=20&c=RXGIGGirj6l-ZZXxp4NF9BnoDe0jG45fvE5ik5y2H3o="
              alt=""
            />
            <h2 className="font-bold mt-6 pb-2">Fashion Event Management</h2>
            <p className="px-12 pb-2">
              Fashion Event management services specialize in organizing fashion
              shows, product launchs, and other f...
            </p>
            <a className="text-[#FE5F38] underline" href="/">
              Learn More
            </a>
          </div>

          <div className="card bg-[#FEF6F3] text-center py-4 px-4 text-[#5C5958] col-span-3 lg:col-span-1">
            <img
              className="rounded-[15px] inline"
              src="https://images.pexels.com/photos/5709665/pexels-photo-5709665.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <h2 className="font-bold mt-6 pb-2">Personal styling</h2>
            <p className="px-12 pb-2">
              These services provide personaluzd fashion advice and styling
              guidance based on your preferences. body typ...
            </p>
            <a className="text-[#FE5F38] underline" href="/">
              Learn More
            </a>
          </div>

          <div className="card bg-[#FEF6F3] text-center py-4 px-4 text-[#5C5958] col-span-3 lg:col-span-1">
            <img
              className="rounded-[15px] inline"
              src="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              // https://images.pexels.com/photos/7679814/pexels-photo-7679814.jpeg?auto=compress&cs=tinysrgb&w=600
            />
            <h2 className="font-bold mt-6 pb-2">Fashion Subscription Boxes</h2>
            <p className="px-12 pb-2">
              Subscription boxes like FabFitFun and Birchbox offer curated
              selections of fashion and beauty products deliv...
            </p>
            <a className="text-[#FE5F38] underline" href="/">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
