import React, { useState } from "react";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Drawer from "../Drawer/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDrawerOpen, toggleDrawer } from "@/features/drawerSlice";
import AddToCart from "../AddToCart/AddToCart";

const Home = () => {
  const isDrawerOpen = useSelector(selectIsDrawerOpen);
  // const isDrawerOpen = useSelector<RootState>(
  //   (state) => state.drawer.isDrawerOpen
  // );
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    dispatch(toggleDrawer());
  };

  return (
    <>
      <div className="bg-[#84c8e1] bg-gradient-to-l w-full h-[750px]  ">
        <Banner />
      </div>
      <div className="w-screen">
        <Products />
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={handleDrawerToggle}
        children={<AddToCart />}
      />
    </>
  );
};

export default Home;
