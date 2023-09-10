import React, { FC } from "react";
import { BsCartFill, BsSearch } from "react-icons/bs";

export interface ISearchAndCartComp {
  variant: "cartPrimary" | "cartSecondary" | "searchPrimary";
}

const SearchAndCartComp: FC<ISearchAndCartComp> = ({ variant }) => {
  if (variant === "cartPrimary" || variant === "cartSecondary")
    return (
      <div
        className={`${
          variant === "cartPrimary"
            ? "bg-white/40 backdrop:blur text-[#3734a9] text-xl"
            : variant === "cartSecondary"
            ? "bg-primary_blue text-white"
            : ""
        } rounded-full p-3  `}
      >
        <BsCartFill />
      </div>
    );
  if (variant === "searchPrimary") {
    return (
      <div className="bg-white/40 backdrop:blur rounded-full p-3 text-primary_blue text-lg ">
        <BsSearch />
      </div>
    );
  }
};

export default SearchAndCartComp;
