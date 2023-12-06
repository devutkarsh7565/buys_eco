import Button from "@/components/Button/Button";
import React from "react";
import { MdCloudDone } from "react-icons/md";

const BannerLeftSection = () => {
  const doneIconWithText = (text: string) => {
    return (
      <div className="text-sm flex gap-2 items-center">
        <MdCloudDone className="text-primary_blue text-lg" />
        <h1 className="text-black opacity-80">{text}</h1>
      </div>
    );
  };
  return (
    <div className="w-1/2 flex flex-col gap-8 py-10">
      <div className="bg-white backdrop:blur-lg bg-opacity-30 py-3 px-4 rounded-lg w-3/4 flex gap-7 shadow-sm">
        {doneIconWithText("Free Register")}
        {doneIconWithText("Great Service")}
        {doneIconWithText("Easy Payment")}
      </div>
      <h1 className="text-black text-6xl font-light tracking-tight">
        Getting the best and
      </h1>
      <h1 className="text-black text-6xl font-light tracking-tight">
        latest style has never
      </h1>
      <h1 className="text-6xl font-bold text-primary_blue">been easier!</h1>
      <p className="text-base font-normal text-black/60">
        <span className="font-semibold">BuyEco</span> is a platform that helps
        to make fashion accessible to all .It brings fashion to your doorstep!
      </p>
      <div>
        <Button
          title="Shop Collections"
          variant="primary"
          className="px-12 py-4"
        />
      </div>
    </div>
  );
};

export default BannerLeftSection;
