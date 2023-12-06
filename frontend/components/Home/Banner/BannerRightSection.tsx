import Image from "next/image";
import React from "react";

const BannerRightSection = () => {
  const glassmorphismImg = () => {
    return (
      <Image
        src={`https://assets.vogue.com/photos/61b7a97fd7dd9bdc1b4eab00/master/w_1600%2Cc_limit/VO1119_Coats_08.jpg`}
        alt=""
        width={70}
        height={70}
        className="object-cover rounded-sm"
      />
    );
  };
  return (
    <div className="relative ">
      <div className="absolute top-[20%] left-28 w-60 h-96 shadow-sm">
        <Image
          src={`https://assets.vogue.com/photos/61b7a97fd7dd9bdc1b4eab00/master/w_1600%2Cc_limit/VO1119_Coats_08.jpg`}
          alt=""
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
      <div className="absolute top-[42%] left-96 w-40 h-64">
        <Image
          src={`https://i.pinimg.com/736x/08/da/63/08da63ade4b3e9f1017e74cadb07dd06.jpg`}
          alt=""
          layout="fill"
          className="object-cover rounded-full"
        />
      </div>
      {/* <div className="absolute z-20 top-[65%] left-40 bg-white/30 backdrop:blur-xl shadow-xl p-3">
        {glassmorphismImg()}
      </div> */}
    </div>
  );
};

export default BannerRightSection;
