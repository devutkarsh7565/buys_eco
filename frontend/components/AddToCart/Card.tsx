import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-full rounded-xl p-4 border-gray-200 border  flex items-center flex-col gap-3">
        <div className="flex w-full justify-between">
          <div className="relative w-28 h-28">
            <Image
              src={`https://assets.vogue.com/photos/61b7a97fd7dd9bdc1b4eab00/master/w_1600%2Cc_limit/VO1119_Coats_08.jpg`}
              alt=""
              layout="fill"
              className="object-cover rounded-full"
            />
          </div>
          <div className="w-3/5 text-black/90">
            <h1 className="text-xl font-lato">
              The Derma Co 1% Salicylic Body Wash for Body Acne with...
            </h1>
            <p className="text-lg font-lato text-gray-500">250ml</p>
          </div>
        </div>
        <div className="border-t border-gray-200 w-full flex justify-between text-black pt-4">
          <h1>Quantity: 1</h1>
          <div className="flex gap-3">
            <h1>349</h1>
            <h1>328</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
