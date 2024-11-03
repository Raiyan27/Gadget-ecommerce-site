import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const GadgetDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const gadget = data.find((gadget) => gadget.id === id);
  const {
    title,
    price,
    availability,
    description,
    image,
    Specification,
    rating,
  } = gadget;
  const roundedRating = Math.round(rating * 2) / 2;
  return (
    <>
      <div className="relative">
        <div className="text-center bg-[#9538E2] p-10 pb-80">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Product Details
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex max-w-4xl mx-auto bg-white p-10 gap-12 rounded-lg shadow-lg -mt-72 mb-32">
          <div className="max-w-[350px] rounded-lg p-4">
            <img src={image} alt="Gadget" className="w-full rounded-lg" />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Price: ${price}
              </p>
            </div>
            <div
              className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                availability
                  ? "bg-green-100 text-green-800 border-green-400"
                  : "bg-red-100 text-red-800 border-red-400"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </div>
            <p className="text-gray-600">{description}</p>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Specification:
              </h2>
              <ul className="list-decimal list-inside text-gray-700 ml-4">
                {Specification.map((specs, index) => (
                  <li key={index}>{specs}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">Rating:</h2>
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />

                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked={roundedRating >= 0.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                  defaultChecked={roundedRating >= 1}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked={roundedRating >= 1.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                  defaultChecked={roundedRating >= 2}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked={roundedRating >= 2.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                  defaultChecked={roundedRating >= 3}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked={roundedRating >= 3.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                  defaultChecked={roundedRating >= 4}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-green-500"
                  defaultChecked={roundedRating >= 4.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2 bg-green-500"
                  defaultChecked={roundedRating >= 5}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2 hover:bg-purple-700">
                Add To Cart
              </button>
              <button className="px-4 py-2 border rounded-lg text-purple-600 border-purple-600 hover:bg-purple-100">
                favorite_border
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GadgetDetail;
