import React from "react";

const DashBoard = () => {
  return (
    <>
      <div className="text-center bg-[#9538E2] p-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-lg text-white mb-6">
            Welcome to your Gadget Heaven Dashboard. Explore the latest tech
            trends, manage your purchases, and track your orders all in one
            place
          </p>
        </div>
        <div>
          <button className="btn">Cart</button>
          <button className="btn">Wishlist</button>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
