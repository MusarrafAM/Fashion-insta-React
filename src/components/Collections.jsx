import React from "react";

const Collections = () => {
  return (
    <div className="w-full py-16 px-4 lg:h-screen ">
      <div className="py-10 max-w-[1240px] mx-auto">
        <div className="headings text-center mx-auto">
          <h1 className="md:text-5xl text-4xl font-bold mb-5">Fashion Collection That You <br/> Will Love</h1>
          <p className="md:text-xl text-lg">
            Fashion service offers innovative and unique styles that go beyond <br/> conventional fashion trends. 
          </p>
        </div>

        <div className="container-image-gallery flex flex-row">
          <div className="left grid grid-rows-5 grid-cols-3">
            <div className="row-span-5 ">1</div>
            <div className="col-span-2 row-span-3">2</div>
            <div className="col-span-2 row-span-2">3</div>
          </div>
          <div className="middle grid">
            <div >4</div>
          </div>
          {/* <div className="right grid grid-rows-5 grid-cols-3">
            <div className="col-span-2 row-span-2">5</div>
            <div className="col-span-2 row-span-3">6</div>
            <div className="row-span-5">7</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Collections;
