import React from "react";
import { testimonials } from "../../assests/testimonial";

const Testimonials = () => {
  return (
    <div className="container">
      <h1 className="text-2xl md:ml-5">what people thinks about us.</h1>
      <div className="flex flex-wrap  justify-center items-center mb-10 cursor-pointer">
        {testimonials.map((ele) => {
          return (
            <div className="w-64 border-slate-200 hover:border-t-4 border-b-4 p-3 m-4">
              <div className="m-2 p-2">{ele.feedback}</div>
              <div className="flex justify-around items-center">
                <img src={ele.image} alt="" className="w-14" />
                <div>
                  <h1 className="font-bold">{ele.name}</h1>
                  <p>{ele.title}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
