import React from "react";

const Hero = () => {
  return (
    <div className="image-container">
      <img
        src="https://images.unsplash.com/photo-1695684714296-b29348b6dd5e?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="home"
      />
      <div className="image-text">
        <h1 className="text-4xl m-2 font-bold text-white">
          Let us Find your Forever Food!
        </h1>
        <p className="text-white text-xl">
          "Luxury redefined, experience exquisite hospitality."
        </p>
        <a
          href="/restaurants"
          className="bg-slate-300 py-2 px-3 text-xl rounded m-2 hover:text-white font-bold"
        >
          <button className="m-5">Search Now</button>
        </a>
        <a
          href="/quote"
          className="bg-slate-300 py-2 px-3 text-xl rounded m-2 hover:text-white font-bold"
        >
          <button className="m-5">KnowMore</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
