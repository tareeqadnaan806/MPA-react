import React from "react";
import { QuoteCard } from "../../components/index";
import data from "../../assests/quote";

const Quote = () => {
  return (
    <div className="m-4">
      {data.quotes.map((ele) => (
        <QuoteCard quote={ele.quote} author={ele.author} />
      ))}
    </div>
  );
};
export default Quote;
