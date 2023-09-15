import { toggleDrawer } from "@/features/drawerSlice";
import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useDispatch } from "react-redux";

const AddToCartHeaderSection = () => {
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };
  return (
    <>
      <div className="border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <div className="flex gap-3">
          <button onClick={handleDrawerToggle}>
            {" "}
            <GoArrowLeft className="text-black text-3xl cursor-pointer" />
          </button>
          <div className="gap-2 flex items-end">
            <h1 className="text-2xl text-black font-lato font-medium">Cart</h1>
            <p className="text-lg text-gray-500 font-lato ">1 items</p>
          </div>
        </div>
        <button className="text-primary_blue font-lato">View Wishlist</button>
      </div>
    </>
  );
};

export default AddToCartHeaderSection;
