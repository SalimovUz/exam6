import React from "react";
import { facebook, instagram, twitter } from ".";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" p-6  container  mx-auto w-full ">
        <div className="grid grid-cols-2 mt-10 gap-7 justify-between text-center md:flex">
          <div className="flex flex-col gap-3 ">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Home
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Categories
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Devices
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Pricing
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              FAQ
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Movies
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Gernes
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Trending
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              New Release
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Popular
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Shows
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Gernes
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Trending
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              New Release
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Popular
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Support
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Contact Us
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Subscription
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Plans
            </NavLink>
            <NavLink className=" text-slate-500 text-sm font-medium leading-normal">
              Features
            </NavLink>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <NavLink className="text-white text-base font-semibold leading-normal">
              Connect With Us
            </NavLink>
            <div className="flex gap-2 ">
              <button className="p-3 bg-[#1A1A1A] rounded-lg w-11 h-11 hover:bg-red-400">
                <img src={facebook} alt="face" width={"20px"} height={"20px"} />
              </button>
              <button className="p-3 bg-[#1A1A1A] rounded-lg w-11 h-11 hover:bg-red-400">
                <img
                  src={instagram}
                  alt="insta"
                  width={"20px"}
                  height={"20px"}
                />
              </button>
              <button className="p-3 bg-[#1A1A1A] rounded-lg w-11 h-11 hover:bg-red-400">
                <img src={twitter} alt="face" width={"20px"} height={"20px"} />
              </button>
            </div>
          </div>
        </div>
        <span className="block w-full h-px bg-slate-900 mt-10"></span>
        <div className="md:flex mt-8 justify-between">
          <p className=" text-slate-600 text-sm font-normal leading-normal lg:text-lg ">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="flex mt-5 gap-8 md:m-0 ">
            <p className="text-slate-600 text-sm font-normal leading-normal lg:text-lg">
              Terms of Use
            </p>
            <p className="text-slate-600 text-sm font-normal leading-normal lg:text-lg">
              Privacy Policy
            </p>
            <p className="text-slate-600 text-sm font-normal leading-normal lg:text-lg">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
