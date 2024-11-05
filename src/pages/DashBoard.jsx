import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getCartList, setCartList } from "../utils/addToCart";
import { getFavList, setFavList } from "../utils/addToFav";
import { Helmet } from "react-helmet";

const DashBoard = () => {
  const [showCart, setShowCart] = useState(true);
  const [cart, setCart] = useState([]);
  const [fav, setFav] = useState([]);
  const [isSortedDesc, setIsSortedDesc] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const gadgets = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartAndFavLists = () => {
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

      const cartTotal = cartList.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(cartTotal);
    };

    updateCartAndFavLists();
  }, [gadgets]);

  const handleSort = () => {
    const sortedCart = [...cart].sort((a, b) =>
      isSortedDesc ? a.price - b.price : b.price - a.price
    );
    setCart(sortedCart);
    setIsSortedDesc(!isSortedDesc);
  };

  const handlePurchase = () => {
    setCart([]);
    setCartList([]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    setCartList(updatedCart.map((item) => item.id));

    const updatedTotal = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(updatedTotal);
  };

  const removeFromFav = (id) => {
    const updatedFav = fav.filter((item) => item.id !== id);
    setFav(updatedFav);
    setFavList(updatedFav.map((item) => item.id));
  };

  return (
    <>
      <Helmet>
        <title>Dashboard || Gadget Haven</title>
      </Helmet>
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
            className={`btn rounded-full ${
              showCart ? "bg-[#9538E2] text-white" : "bg-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setShowCart(false)}
            className={`btn rounded-full ${
              !showCart ? "bg-[#9538E2] text-white" : "bg-white"
            }`}
          >
            Wish List
          </button>
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-6">
        {showCart ? (
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              <span className="text-lg font-semibold text-[#9538E2]">
                Total: ${totalPrice.toFixed(2)}
              </span>
              <div className="flex gap-4 items-center">
                <button onClick={handleSort} className="btn rounded-full">
                  Sort by Price ({isSortedDesc ? "Ascending" : "Descending"})
                </button>
                <button
                  onClick={handlePurchase}
                  className="btn bg-[#9538E2] text-white rounded-full"
                  disabled={cart.length === 0 || totalPrice === 0}
                >
                  Purchase
                </button>
              </div>
            </div>
            <div>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="card bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center gap-4 my-4"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-xl w-32 h-32"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                      <p className="text-md font-semibold text-[#9538E2]">
                        ${item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-2xl"
                    >
                      &times;
                    </button>
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
            <div>
              {fav.map((item) => (
                <div
                  key={item.id}
                  className="card bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-center gap-4 my-4"
                >
                  <div className="flex gap-4 items-center">
                    <img
                      className="rounded-xl w-32 h-32"
                      src={item.image}
                      alt={item.title}
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-sm text-gray-700">
                        {item.description}
                      </p>
                      <p className="text-md font-semibold text-[#9538E2]">
                        ${item.price}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromFav(item.id)}
                      className="text-red-500 text-2xl"
                    >
                      &times;
                    </button>
                  </div>
                </div>
              ))}
              {fav.length === 0 && (
                <p className="text-center text-gray-500">
                  Your wish list is empty.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm text-center">
            <div className="flex justify-center">
              <img src="/group.png" alt="" />
            </div>
            <h2 className="text-2xl font-semibold mb-4">Payment Successfull</h2>
            <p className="text-lg mb-4">
              Thanks for purchasing <br />
              <span className="font-bold">Total: ${totalPrice.toFixed(2)}</span>
              .
            </p>
            <button
              onClick={handleCloseModal}
              className="btn bg-[#9538E2] text-white mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
