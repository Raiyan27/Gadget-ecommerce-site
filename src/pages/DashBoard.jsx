import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getCartList } from "../utils/addToCart";
import { getFavList } from "../utils/addToFav";

const DashBoard = () => {
  const [showCart, setShowCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);
  const [isSortedDesc, setIsSortedDesc] = useState(false);
  const gadgets = useLoaderData();

  useEffect(() => {
    const storedCartList = getCartList();
    const storedFavList = getFavList();

    const cartList = gadgets.filter((gadget) =>
      storedCartList.includes(gadget.id)
    );
    const favList = gadgets.filter((gadget) =>
      storedFavList.includes(gadget.id)
    );
    setCart(cartList);
    setFav(favList);
  }, [gadgets]);

  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) =>
      isSortedDesc ? a.price - b.price : b.price - a.price
    );
    setCart(sortedCart);
    setIsSortedDesc(!isSortedDesc);
  };

  return (
    <>
      <div className="text-center bg-[#9538E2] p-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
          <p className="text-lg text-white mb-6">
            Welcome to your Gadget Heaven Dashboard. Explore the latest tech
            trends, manage your purchases, and track your orders all in one
            place.
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => setShowCart(true)}
            className={`btn ${showCart ? "bg-purple-600 text-white" : ""}`}
          >
            Cart
          </button>
          <button
            onClick={() => setShowCart(false)}
            className={`btn ${!showCart ? "bg-purple-600 text-white" : ""}`}
          >
            Wish List
          </button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        {showCart ? (
          <div>
            <div className="flex justify-between">
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              <div className="flex gap-4">
                <button onClick={handleSort} className="btn">
                  Sort by Price ({isSortedDesc ? "Ascending" : "Descending"})
                </button>
                <button className="btn">Purchase</button>
              </div>
            </div>
            <div className="">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card bg-gray-100 p-4 rounded-lg shadow-md flex-row gap-4 my-4"
                >
                  <div className="">
                    <img
                      className="rounded-xl w-32 h-32"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                    <p className="text-md font-semibold text-purple-700">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Your Wish List</h2>
            <div className="">
              {fav.map((item) => (
                <div
                  key={item.id}
                  className="card bg-gray-100 p-4 rounded-lg shadow-md flex-row gap-4 my-4"
                >
                  <div className="">
                    <img
                      className="rounded-xl w-32 h-32"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-700">{item.description}</p>
                    <p className="text-md font-semibold text-purple-700">
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
              {cart.length === 0 && (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DashBoard;
