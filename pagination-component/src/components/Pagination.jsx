import React, { useState } from "react";

const Pagination = ({ updateOffset, totalPages }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);
  console.log(pages);

  const [page, setPage] = useState(0);

  const handleSetPage = (index) => {
    setPage(index);
    updateOffset(index * 10);
  };

  return (
    <div className="my-10 flex justify-center  overflow-x-auto">
      {pages.map((p, i) => (
        <button
          key={i}
          className={`border border-black text-2xl mx-1 px-4 cursor-pointer  ${
            page === i ? "bg-amber-100" : "bg-amber-400"
          } hover:bg-amber-50 `}
          onClick={() => handleSetPage(i)}
        >
          {p}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
