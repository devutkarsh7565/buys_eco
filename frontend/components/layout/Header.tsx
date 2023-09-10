import Link from "next/link";
import React from "react";
import SearchAndCartComp from "../SearchAndCartComp/SearchAndCartComp";
import Button from "../Button/Button";

const Header = () => {
  const pagesRoute = [
    {
      link: "/",
      routeName: "Home",
    },
    {
      link: "/products",
      routeName: "Products",
    },
    {
      link: "/contact",
      routeName: "Contact",
    },
  ];
  return (
    <div className="bg-secondary w-full fixed top-0 z-20 flex justify-center">
      <div className=" flex justify-between items-center w-full py-7 px-4  max-w-6xl min-w-6xl border-b border-white">
        <h1 className="text-primary_blue text-3xl font-normal font-sans cursor-pointer">
          BuyEco
        </h1>
        <div className="flex gap-9">
          {pagesRoute?.map((item) => (
            <Link href={item?.link}>
              <ul
                key={item?.link}
                className="border-b-2 border-transparent hover:border-primary_blue hover:text-primary_blue duration-300 text-lg text-black/60"
              >
                {item?.routeName}
              </ul>
            </Link>
          ))}
        </div>
        <div className="flex gap-5 h-11">
          <SearchAndCartComp variant="cartPrimary" />
          <SearchAndCartComp variant="searchPrimary" />
          <Button variant="primary" title="Get Started" className="px-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
