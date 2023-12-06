import { useSearchProductsApi } from "@/api/products/products.hook";
import { useDebounce } from "@/hooks/useDebounce";
import React, { useState } from "react";

const search = () => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 500);
  console.log(debouncedSearchValue, "value");
  const { productData } = useSearchProductsApi(debouncedSearchValue);
  return (
    <div className="text-black bg-white min-h-screen w-full mt-32">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="border-black"
      />
      <div>
        {productData?.product?.map((item) => (
          <div>{item?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default search;
