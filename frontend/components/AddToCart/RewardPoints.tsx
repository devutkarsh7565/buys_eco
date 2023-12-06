import React from "react";
import { BiMessageRoundedDetail } from "react-icons/bi";

const RewardPoints = () => {
  return (
    <>
      <div className="border border-primary_blue py-3 px-2 flex flex-col gap-1 text-black rounded-xl">
        <h1 className="font-lato text-gray-600">Redeem to get a discount on your next order</h1>
        <div className="flex gap-2">
          <h1 className="font-lato">Earn 954 Reward Points</h1>
          <button className="text-gray-600">
            <BiMessageRoundedDetail />
          </button>
        </div>
      </div>
    </>
  );
};

export default RewardPoints;
