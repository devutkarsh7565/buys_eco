import React from "react";
import AddToCartHeaderSection from "./AddToCartHeaderSection";
import Card from "./Card";
import PriceDetails from "./PriceDetails";
import RewardPoints from "./RewardPoints";
import GrandTotal from "./GrandTotal";

const AddToCart = () => {
  return (
    <>
      <AddToCartHeaderSection />
      <div className="py-5 px-4 flex flex-col gap-5">
        <Card />
        <PriceDetails />
        <RewardPoints />
      </div>
      <GrandTotal/>
    </>
  );
};

export default AddToCart;
