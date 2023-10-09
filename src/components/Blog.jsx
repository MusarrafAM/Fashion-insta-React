import React from "react";

const Blog = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="py-10 max-w-[1240px] mx-auto">
        <div className="headings text-center mx-auto">
          <h1 className="md:text-5xl text-4xl font-bold mb-5">
            Explore our Blog
          </h1>
          <p className="md:text-2xl text-xl">
            Fashion service offers innovative and unique styles that go beyond{" "}
            <br /> conventional fashion trends.
          </p>
        </div>

        <div className="container-image-gallery grid grid-cols-3">
          <div className="left col-span-2 grid-rows-2">
            <div className="first-r grid grid-cols-5">
              <div className="z-20 col-span-2 m-2">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vjb25kJTIwaGFuZCUyMGNsb3RoZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="col-span-3 m-2">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://www.onepulse.com/wp-content/uploads/2022/10/charlota-blunarova-r5xHI_H44aM-unsplash-scaled-e1666020572669.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="second-r grid grid-cols-5">
              <div className="col-span-3 m-2 mt-6">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://capital-placement.b-cdn.net/wp-content/uploads/2020/10/fashion-internship-2048x1384.jpg.webp"
                  alt=""
                />
              </div>
              <div className=" col-span-2 m-2 mt-6">
                <img
                  className="w-[100%] h-[100%] object-cover"
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right m-2">
            <img
              className="w-[100%] h-[100%] object-cover"
              src="https://images.pexels.com/photos/1759510/pexels-photo-1759510.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
