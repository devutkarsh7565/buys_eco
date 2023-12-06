import React from "react";
import Currency from "../currency/Currency";
import Button from "../Button/Button";

const GrandTotal = () => {
  return (
    <>
         
          <div className="border-t border-gray-200 px-6 py-3 flex justify-between items-center w-full fixed bottom-0">
        <div className="flex flex-col text-black">
          <Currency amount={954} className="text-xl" />
          <h1 className="text-black/90 text-sm">Grand Total</h1>
        </div>
        <Button title="Proceed" variant="primary" className="px-5" />
      </div>

    </>
  );
};

export default GrandTotal;
