import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, Delete, Logo, Vector, Vector1 } from ".";

const Header = () => {
  const [navHidden, setNavHidden] = useState("hidden");
  const [buttonHid, setButtonHid] = useState("");

  return (
    <div>
      <div className="fixed z-10 bg-[#141414] bg-opacity-15 backdrop-blur-md w-full">
        <div className="container  mx-auto px-6 py-2 ">
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img src={Logo} alt="logo" width={"116px"} height={"35px"} />
            </NavLink>
            <div className="navlink_header hidden md:flex lg:gap-8 md:gap-3 bg-black p-2 lg:p-[10px] rounded-lg items-center">
              <NavLink
                to="/"
                className="text-gray-700 lg:text-lg text-sm font-medium leading-normal lg:px-6 lg:py-4 px-4 py-3 rounded-lg cursor-pointer"
              >
                Home
              </NavLink>
              <NavLink
                to="/movie"
                className={`text-gray-700 lg:text-lg text-sm font-normal leading-normal lg:px-6 lg:py-4 hover:bg-[#1A1A1A] rounded-lg cursor-pointer`}
              >
                Movies & Shows
              </NavLink>
              <NavLink
                to="/support"
                className=" text-gray-700 lg:text-lg text-sm font-normal leading-normal lg:px-6 lg:py-4 hover:bg-[#1A1A1A] rounded-lg cursor-pointer"
              >
                Support
              </NavLink>
              <NavLink
                to="subscription"
                className=" text-gray-700 lg:text-lg text-sm font-normal leading-normal lg:px-6 lg:py-4 hover:bg-[#1A1A1A] rounded-lg cursor-pointer"
              >
                Subscriptions
              </NavLink>
            </div>
            <div className="flex md:gap-7 gap-2">
              <input
                type="text"
                className="bg-transparent text-white outline-none"
                name="input_search"
              />
              <button id="input_search">
                <img src={Vector} alt="search" width={"25px"} height={"25px"} />
              </button>
              <button
                className={`md:hidden ${buttonHid}`}
                onClick={() => {
                  setNavHidden("");
                  setButtonHid("hidden");
                }}
              >
                <img src={Button} alt="vector" width={"48px"} height={"48px"} />
              </button>
              <button
                className={`md:hidden ${navHidden}`}
                onClick={() => {
                  setNavHidden("hidden");
                  setButtonHid("");
                }}
              >
                <img src={Delete} alt="vector" width={"24px"} height={"48px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${navHidden} flex flex-col fixed z-10 bg-[#141414] py-4 px-6 bg-opacity-15 backdrop-blur-md mt-[60px] items-end right-0 rounded-l-lg`}
      >
        <NavLink
          to="/"
          className="text-white text-sm font-medium leading-normal px-4 py-3 bg-[#1A1A1A] rounded-lg cursor-pointer"
        >
          Home
        </NavLink>
        <NavLink
          to="/movie"
          className="text-white text-sm font-medium leading-normal px-4 py-3 hover:bg-[#1A1A1A] rounded-lg cursor-pointer"
        >
          Movies & Shows
        </NavLink>
        <NavLink
          to="/support"
          className="text-white text-sm font-medium leading-normal px-4 py-3 hover:bg-[#1A1A1A] rounded-lg cursor-pointer"
        >
          Support
        </NavLink>
        <NavLink
          to="subscription"
          className="text-white text-sm font-medium leading-normal px-4 py-3 hover:bg-[#1A1A1A] rounded-lg cursor-pointer"
        >
          Subscriptions
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
