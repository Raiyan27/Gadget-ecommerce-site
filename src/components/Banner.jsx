import React from "react";
import Header from "./Header";
const Banner = () => {
  return (
    <>
      <div className="flex items-center justify-center border bg-[#9538E2] container mx-auto rounded-3xl p-32 relative">
        <div className=" text-center">
          <div className="max-w-5xl">
            <h1 className="text-5xl font-bold text-base-100">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories,
              <br /> we have it all!
            </p>
            <button className="btn bg-white text-[#9538E2] text-lg rounded-full">
              Shop NOW!
            </button>
          </div>
        </div>
      </div>
      <div className="top-20 p-10">
        <img src="./banner.jpg" alt="" />
      </div>
    </>
  );
};

export default Banner;
