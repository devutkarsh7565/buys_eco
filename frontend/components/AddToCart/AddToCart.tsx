import React from "react";
import AddToCartHeaderSection from "./AddToCartHeaderSection";
import Card from "./Card";

const AddToCart = () => {
  return (
    <>
      <AddToCartHeaderSection />
      <div className="py-5 px-4">
        <Card />
      </div>
    </>
  );
};

export default AddToCart;
