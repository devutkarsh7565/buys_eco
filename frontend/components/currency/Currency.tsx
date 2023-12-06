import React, { FC } from "react";

export interface ICurrency {
  amount: number;
  className?: string;
}

const Currency: FC<ICurrency> = ({ amount, className }) => {
  return (
    <div className={`flex font-lato ${className}`}>
      <h1>₹</h1>
      <h1>{amount}</h1>
    </div>
  );
};

export default Currency;
