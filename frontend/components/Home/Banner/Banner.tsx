import React from "react";
import BannerLeftSection from "./BannerLeftSection";
import BannerRightSection from "./BannerRightSection";
import GrowingBrands from "./GrowingBrands";

const Banner = () => {
  return (
    <>
      <div className="flex w-full justify-center ">
        <div className="max-w-6xl min-w-6xl mt-32 w-full flex relative">
          <BannerLeftSection />
          <BannerRightSection />
          <GrowingBrands />
        </div>
      </div>
    </>
  );
};

export default Banner;
