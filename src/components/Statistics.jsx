import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Helmet } from "react-helmet";

const Statistics = () => {
  // Retrieve data using the loader
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Stats || Gadget Haven</title>
      </Helmet>
      <div className="bg-[#9538E2] p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Statistics</h1>
          <p className="text-lg text-white mb-6">
            See trends and prices of different products!
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <BarChart width={1500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
      </div>
    </>
  );
};

export default Statistics;
