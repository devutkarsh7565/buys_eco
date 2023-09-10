import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductDetailPage = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <div className="flex flex-col gap-10">
      {router.query.id} product
      <div className="flex flex-col gap-10">
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <div className="bg-red-500 h-[500px] w-[500px]"></div>
        <Link href={`/products/hello`}>
          {" "}
          <div className="bg-red-500 h-[500px] w-[500px]"></div>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetailPage;
