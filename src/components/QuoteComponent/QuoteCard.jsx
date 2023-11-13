import React from "react";

const QuoteCard = ({ quote, author }) => {
  return (
    <div className="container">
      <div className="text-center bg-slate-300 border-2 border-red-300 m-4 rounded-xl ">
        <h3 className="text-xl p-3">{quote}</h3>
        <p className="m-3 font-bold">-{author}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
