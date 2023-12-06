import React from "react";
import Currency from "../currency/Currency";

const PriceDetails = () => {
  return (
    <>
      <div className="w-full rounded-xl p-4 border-gray-200 border  flex flex-col gap-3 text-black">
        <h1 className="text-xl font-lato font-medium text-black">
          Price Details
        </h1>
        <div className="w-full flex justify-between">
          <h1 className="font-lato text-gray-600 "> Bag MRP (1 items)</h1>
          <Currency amount={348} />
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-lato text-gray-600 "> Bag Discount</h1>
          <Currency amount={348} />
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-lato text-gray-600 "> Shipping</h1>
          <div className="flex gap-2">
            <Currency amount={348} className="text-gray-500 line-through" />
            <h1 className="text-green-500">Free</h1>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <h1 className="font-lato font-medium text-xl "> You pay</h1>
          <Currency amount={348} className="font-semibold" />
        </div>
      </div>
    </>
  );
};

export default PriceDetails;
