import Image from "next/image";
import React, { FC } from "react";
import SearchAndCartComp from "../SearchAndCartComp/SearchAndCartComp";

import Link from "next/link";
import { IProduct } from "@/types/productTypes";

export interface IProductCard {
  data: IProduct;
}

const ProductCard: FC<IProductCard> = ({ data }) => {
  return (
    <Link href={`/products/${data?._id}`}>
      <div className="w-52 relative h-72 shadow-xl rounded-2xl">
        <Image
          src={`https://assets.vogue.com/photos/61b7a97fd7dd9bdc1b4eab00/master/w_1600%2Cc_limit/VO1119_Coats_08.jpg`}
          alt=""
          width={208}
          height={120}
          className=" rounded-tl-2xl rounded-tr-2xl h-52 object-cover"
        />
        <div className="w-full flex justify-between py-2 px-2 items-center">
          <div className="flex flex-col gap-1 ">
            <h1 className="text-black">{data?.name}</h1>
            <h1 className="text-black">{data?.price} rs</h1>
          </div>
          <div className="">
            <SearchAndCartComp variant="cartSecondary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
