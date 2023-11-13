import React from "react";

const Contact = () => {
  return (
    <div className="right-contact ">
      <div className=" container flex right-contact-ji justify-center items-center lg:flex-col   ">
        <div className="w-1/2 p-4 lg:w-full lg:p-10">
          <h1 className="font-bold text-2xl">GET IN TOUCH WITH US</h1>
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ipsa quibusdam architecto quo omnis, praesentium eaque natus
            similique beatae asperiores, corrupti consequatur! Animi maxime
            sequi exercitationem culpa voluptatibus illo eaque!
          </p>
          <div className="flex items-center ">
            <div className="mr-4">
              <i class="fa-solid fa-house fa-2xl"></i>
            </div>
            <div className="p-4 ml-4">
              <h1 className="font-bold text-xl">Our Location</h1>
              <p>18-8-62/A, Salam Plaza, Malakpet, Hyderabad, India</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="mr-4">
              <i class="fa-solid fa-phone fa-2xl"></i>
            </div>
            <div className="p-4 ml-4">
              <h1 className="font-bold text-xl">Phone Number</h1>
              <p>(+91) 9515812273</p>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="mr-4">
              <i class="fa-solid fa-envelope fa-2xl"></i>
            </div>
            <div className="p-4 ml-4">
              <h1 className="font-bold text-xl">Email Adress</h1>
              <p>tareeqadnaan806@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 lg:w-full">
          <form
            action=""
            method="post"
            className=" shadow-md rounded px-8 pt-6 pb-8 m
          mx-auto w-full sm:max-w-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your phone number"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Type your message here."
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
                focus:outline-none focus:shadow-outline"
              />
            </div>
            <input
              type="submit"
              value="Get In Touch"
              className="border-2 border-solid border-indigo-600 bg-indigo-500 text-white text-x rounded-xl py-2 px-3 mt-5 cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
