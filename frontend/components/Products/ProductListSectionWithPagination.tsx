import { useFetchConditionalProductsApi } from "@/api/products/products.hook";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { IProduct } from "@/types/productTypes";
import Pagination from "../Pagination/Pagination";

const ProductListSectionWithPagination = () => {
  const [page, setPage] = useState<number>(1);
  const { productData } = useFetchConditionalProductsApi(page);
  console.log(productData, "data");

  const pageCount = Math.round(productData?.productCount / 5);

  return (
    <>
      <div className="w-full py-12 grid grid-cols-4 gap-y-10  2xl:grid-cols-5 mb-96">
        {productData?.product?.map((item: IProduct) => (
          <>
            <ProductCard data={item} />
            <ProductCard data={item} />
          </>
        ))}
      </div>
      <Pagination page={page} setPage={setPage} pageCount={pageCount} />
    </>
  );
};

export default ProductListSectionWithPagination;
