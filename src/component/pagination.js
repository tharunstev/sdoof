import React from "react";

const Pagination = ({ recipe, perpage, pageChange }) => {
  const noOfpage = [];
  for (let i = 1; i <= Math.ceil(recipe / perpage); i++) {
    noOfpage.push(i);
  }

  return (
    <>
      <div className="page-num">
        {noOfpage.map((page, index) => (
          <button key={index} onClick={() => pageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default React.memo(Pagination);
