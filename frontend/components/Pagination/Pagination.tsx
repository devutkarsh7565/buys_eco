import React, { FC } from "react";

export interface IPagination {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pageCount: number;
}

const Pagination: FC<IPagination> = ({ page, setPage, pageCount }) => {
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <>
      <div className="flex flex-col ">
        <button>Prev</button> <button>Number</button> <button>Next</button>
      </div>
    </>
  );
};

export default Pagination;
