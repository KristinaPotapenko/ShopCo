import { Dispatch, SetStateAction } from "react";

import { PaginationButton } from "./PaginationButton/PaginationButton";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
}

export const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  function getPagination(currentPage: number, totalPages: number) {
    const pages: (number | string)[] = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container flex items-center justify-between gap-6 mx-auto pt-10 border-t border-t-black/10">
      <PaginationButton
        disabled={currentPage === 1}
        onClick={handlePrevPage}
        isReversed={true}
      >
        Previous
      </PaginationButton>
      <ul className="flex items-center gap-0.5">
        {getPagination(currentPage, totalPages).map((page, index) => {
          return (
            <li
              key={index}
              className={`py-2.5 px-4 font-semibold cursor-pointer
                ${
                  page === currentPage
                    ? "text-black bg-zinc-100 rounded-lg"
                    : ""
                } 
                ${page === "..." ? "cursor-default" : ""}`}
              onClick={() => typeof page === "number" && setCurrentPage(page)}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <PaginationButton
        disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        Next
      </PaginationButton>
    </div>
  );
};
