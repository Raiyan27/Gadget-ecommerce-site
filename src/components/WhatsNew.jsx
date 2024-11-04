import React from "react";
import { Helmet } from "react-helmet";

const reviews = [
  {
    id: "1",
    title: "Smartphone Alpha Pro Review",
    image:
      "https://i.ibb.co.com/Sf5BH3J/Apple-i-Phone-16-Pro-hero-geo-240909-inline-jpg-large.jpg",
    category: "Smartphones",
    price: 799.99,
    description:
      "A powerful smartphone with a stunning OLED display and fast performance.",
    specifications: [
      "6.7-inch OLED display",
      "128GB storage",
      "Quad camera",
      "5G connectivity",
    ],
    review:
      "The Smartphone Alpha Pro is a flagship device that excels in performance and display quality. With its vibrant 6.7-inch OLED screen, every photo and video comes to life. The quad-camera system offers versatility, capturing stunning images in various conditions. Whether you're streaming your favorite shows or gaming on the go, this smartphone delivers an exceptional experience.",
    pros: ["Stunning display", "Excellent camera quality", "Fast performance"],
    cons: ["Pricey compared to competitors", "Battery life could be better"],
    rating: 4.4,
  },
  {
    id: "2",
    title: "Bluetooth Speaker BeatBox Review",
    image:
      "https://i.ibb.co/cr6PZKp/image-photograph-pair-hifi-level-music-speakers-with-two-speakers-black-background-88135-33694.jpg",
    category: "Audio Devices",
    price: 99.99,
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    specifications: [
      "Bluetooth 5.0",
      "Battery life: 10 hours",
      "Water resistant",
    ],
    review:
      "The BeatBox Bluetooth Speaker is the ultimate portable audio solution. With powerful sound quality and deep bass, it’s perfect for parties or relaxing at home. The 10-hour battery life ensures your music never stops, and its water-resistant design makes it a great companion for outdoor adventures. If you're looking for an affordable speaker that doesn't compromise on sound quality, the BeatBox is a fantastic choice.",
    pros: [
      "Great sound quality",
      "Long battery life",
      "Portable and lightweight",
    ],
    cons: ["Bass can be overwhelming at times", "Limited EQ options"],
    rating: 4.3,
  },
  {
    id: "3",
    title: "Smartphone Beta Lite Review",
    image:
      "https://i.ibb.co.com/sWv9D3s/galaxy-s24-ultra-highlights-camera-overview-mo.jpg",
    category: "Smartphones",
    price: 599.99,
    description:
      "A compact smartphone with high-resolution camera and long battery life.",
    specifications: [
      "5.8-inch LCD display",
      "64GB storage",
      "Dual camera",
      "4G connectivity",
    ],
    review:
      "The Smartphone Beta Lite offers a perfect balance of performance and value. With its compact 5.8-inch display and impressive dual camera setup, it’s ideal for anyone who wants a smartphone that fits easily in their pocket but doesn't skimp on features. The long battery life ensures you can stay connected throughout the day. For those looking for an affordable yet capable device, the Beta Lite is worth considering.",
    pros: ["Compact design", "Good camera performance", "Affordable"],
    cons: [
      "Lower resolution display compared to rivals",
      "Limited storage options",
    ],
    rating: 4.5,
  },
];

const WhatsNew = () => {
  return (
    <>
      <Helmet>
        <title>What's New || Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] p-12">
        <h1 className="text-5xl text-center text-white">Tech Talks</h1>
        <p className="text-center text-xl text-white">
          Learn About the Latest Gadgets in the and buy them in one place!
        </p>
      </div>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={review.image}
                alt={review.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{review.title}</h2>
                <p className="text-gray-600 mb-2">{review.description}</p>
                <p className="text-lg font-bold mb-2">
                  ${review.price.toFixed(2)}
                </p>
                <p className="text-gray-500">Rating: {review.rating}</p>
                <h3 className="font-semibold mt-4">Specifications:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  {review.specifications.map((spec, index) => (
                    <li key={index}>{spec}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">Review:</h3>
                <p className="text-gray-700 mb-2">{review.review}</p>
                <h3 className="font-semibold mt-4">Pros:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  {review.pros.map((pro, index) => (
                    <li key={index}>{pro}</li>
                  ))}
                </ul>
                <h3 className="font-semibold mt-4">Cons:</h3>
                <ul className="list-disc list-inside text-gray-700 mb-2">
                  {review.cons.map((con, index) => (
                    <li key={index}>{con}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
