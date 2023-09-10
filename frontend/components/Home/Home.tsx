import React from "react";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";

const Home = () => {
  return (
    <>
      <div className="bg-[#84c8e1] bg-gradient-to-l w-full h-[750px]  ">
        <Banner />
      </div>
      <div className="w-screen">
        <Products />
      </div>
    </>
  );
};

export default Home;
