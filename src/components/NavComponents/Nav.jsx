import React, { useState } from "react";
import { Link } from "react-router-dom";
import open1 from "../../assests/open1.png";
import close from "../../assests/close.png";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="container navbar flex justify-between items-center">
        <div>
          <a href="/home" className="flex justify-center items-center">
            <img src="/assets/logo1.png" alt="" className="navimg" />
            <h1 className="font-bold text-2xl">Olivia Foods</h1>
          </a>
        </div>
        <ul className="flex justify-center items-center md:hidden ">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
          <li>
            <Link to="/restaurants">Restaurant</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex justify-center items-center sm:hidden">
          <img
            src={toggle ? close : open1}
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer w-6 m-5"
          />
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl `}
        >
          <ul className="sm:hidden sidebar">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/quote">Quote</Link>
            </li>
            <li>
              <Link to="/restaurants">Restaurant</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
