import React, { FC } from "react";

export interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
  isPreviousData: boolean;
}

const Pagination: FC<IPagination> = ({
  page,
  setPage,
  pageCount,
  isPreviousData,
}) => {
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);
  console.log(pageCount, "pageCount");

  const pagesArray = [];

  for (let i = 1; i <= pageCount; i++) {
    pagesArray.push(i);
  }
  console.log(pagesArray, "array");

  return (
    <>
      <div className="flex text-black gap-1">
        <button
          className="border-black border-2 h-9 px-3"
          onClick={prevPage}
          disabled={isPreviousData || page === 1}
        >
          Prev
        </button>{" "}
        {pagesArray.map((pg) => (
          <button
            key={pg}
            onClick={() => setPage(pg)}
            disabled={isPreviousData}
            className="border-black border-2 h-9 px-3"
          >
            {pg}
          </button>
        ))}{" "}
        <button
          onClick={nextPage}
          disabled={isPreviousData || page === pageCount}
          className="border-black border-2 h-9 px-3"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
