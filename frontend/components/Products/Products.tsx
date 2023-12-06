import React from "react";
import Heading from "../Heading/Heading";
import ProductFilterSection from "./ProductFilterSection";
import ProductListSectionWithPagination from "./ProductListSectionWithPagination";

const Products = () => {
  return (
    <div className="bg-white min-h-screen w-full pt-40 flex flex-col items-center px-20">
      <Heading title="Our featured store" variant="5xl" />
      <div className="flex justify-center w-full">
        <ProductFilterSection />
        <ProductListSectionWithPagination />
      </div>
    </div>
  );
};

export default Products;
