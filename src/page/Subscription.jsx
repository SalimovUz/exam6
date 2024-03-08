import React, { useState } from "react";

const Subscription = () => {
  const [price, setPrice] = useState("$9.99");
  const [price2, setPrice2] = useState("$12.99");
  const [price3, setPrice3] = useState("$14.99");
  const [date, setDate] = useState("/month");
  const [active, setActive] = useState(false);
  return (
    <div className="Price p-6  container  mx-auto pt-20 md:pt-24 ">
      <div>
        <div className="md:flex items-center justify-between mb-10">
          <div>
            <h1 className="text-white text-2xl md:text-[28px] font-bold leading-normal">
              Frequently Asked Questions
            </h1>
            <p className=" text-slate-500 text-base font-normal leading-normal ">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div className="flex items-center justify-between p-2 bg-black mt-5 rounded-lg w-48">
            <button
              className={`navlink_header py-3 px-5 ${
                active ? "" : "bg-[#1F1F1F]"
              } text-white rounded-lg text-sm`}
              onClick={() => {
                setPrice("$9.99");
                setPrice2("$12.99");
                setPrice3("$14.99");
                setDate("/month");
                setActive(!active);
              }}
            >
              Monthly
            </button>
            <button
              className={`navlink_header py-3 px-5 hover:bg-[#1F1F1F] ${
                active ? "bg-[#1F1F1F]" : ""
              } text-white rounded-lg text-sm`}
              onClick={() => {
                setPrice("$101.5");
                setPrice2("$110.4");
                setPrice3("$130.7");
                setDate("/year");
                setActive(!active);
              }}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:gap-5 md:flex-row">
          <div className="p-6 rounded-lg bg-[#1A1A1A]">
            <h1 className="text-white text-lg font-medium leading-normal mb-2">
              Basic Plan
            </h1>
            <p className="text-slate-600 text-sm font-normal leading-normal mb-7">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <div className="flex items-end gap-1 mb-7">
              <h1 className="text-white text-2xl font-semibold md:text-3xl lg:text-[40px]">
                {price}
              </h1>
              <span className=" text-slate-600 text-sm font-medium md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-[#141414] rounded-lg hover:bg-red-600">
                Start Free Trial
              </button>
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-red-600 rounded-lg hover:bg-red-400">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-[#1A1A1A]">
            <h1 className="text-white text-lg font-medium leading-normal mb-2">
              Standard Plan
            </h1>
            <p className="text-slate-600 text-sm font-normal leading-normal mb-7">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </p>
            <div className="flex items-end gap-1 mb-7">
              <h1 className="text-white text-2xl font-semibold md:text-3xl lg:text-[40px]">
                {price2}
              </h1>
              <span className=" text-slate-600 text-sm font-medium md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-[#141414] rounded-lg hover:bg-red-600">
                Start Free Trial
              </button>
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-red-600 rounded-lg hover:bg-red-400">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="p-6 rounded-lg bg-[#1A1A1A]">
            <h1 className="text-white text-lg font-medium leading-normal mb-2">
              Premium Plan
            </h1>
            <p className="text-slate-600 text-sm font-normal leading-normal mb-7">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </p>
            <div className="flex items-end gap-1 mb-7">
              <h1 className="text-white text-2xl font-semibold md:text-3xl lg:text-[40px]">
                {price3}
              </h1>
              <span className=" text-slate-600 text-sm font-medium md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-[#141414] rounded-lg hover:bg-red-600">
                Start Free Trial
              </button>
              <button className="py-[14px] px-5 md:py-[16px] md:px-6 lg:py-[18px] lg:px-6 text-white text-sm md:text-base lg:text-lg font-semibold leading-normal bg-red-600 rounded-lg hover:bg-red-400">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-white text-2xl md:text-[28px] font-bold leading-normal">
          We Provide you streaming experience across various devices.
        </h1>
        <p className=" text-slate-500 text-base font-normal leading-normal lg:pr-80">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="bg-black rounded-lg mt-4 p-4 md:hidden">
        <button className=" text-gray-600 text-sm font-medium leading-normal py-3 px-5 rounded-lg w-1/3 hover:bg-[#1F1F1F]">
          Basic
        </button>
        <button className=" text-white text-sm font-medium leading-normal py-3 px-5 bg-[#1F1F1F] rounded-lg w-1/3">
          Standart
        </button>
        <button className=" text-gray-600 text-sm font-medium leading-normal py-3 px-5 rounded-lg w-1/3 hover:bg-[#1F1F1F]">
          Premium
        </button>
      </div>
      <div className="bg-black rounded-lg mt-4 py-4 px-10 flex flex-col gap-3 md:hidden">
        <div className="flex">
          <div className="flex flex-col gap-1 w-2/4">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Price
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              $12.99/Month
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Free Trail
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              $12.99/Month
            </h1>
          </div>
        </div>
        <div>
          <p className=" text-gray-600 text-sm font-medium leading-normal">
            Content
          </p>
          <h1 className="text-white text-sm font-medium leading-normal">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </h1>
        </div>
        <div>
          <p className=" text-gray-600 text-sm font-medium leading-normal">
            Devices
          </p>
          <h1 className="text-white text-sm font-medium leading-normal">
            Watch on Two device simultaneously
          </h1>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-1 w-2/4">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Cancel Anytime
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              Yes
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              HDR
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              Yes
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-1 w-2/4">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Dolby Atmos
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              Yes
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Ad - Free
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              Yes
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="flex flex-col gap-1 w-2/4">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Offline Viewing
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              Yes, for select titles.
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-gray-600 text-sm font-medium leading-normal">
              Family Sharing
            </p>
            <h1 className="text-white text-sm font-medium leading-normal">
              5 family members.
            </h1>
          </div>
        </div>
      </div>
      <div className="border border-slate-600 mt-4 hidden md:flex md:flex-col rounded-lg">
        <div className="flex bg-black rounded-lg">
          <div className="border-r border-slate-600 p-4 w-1/4">
            <h1 className="text-white text-xl font-semibold leading-normal">
              Features
            </h1>
          </div>
          <div className="border-r border-slate-600 p-4 w-1/4">
            <h1 className="text-white text-xl font-semibold leading-normal">
              Basic
            </h1>
          </div>
          <div className="border-r border-slate-600 p-4 w-1/4">
            <h1 className="text-white text-xl font-semibold leading-normal">
              Standart
            </h1>
          </div>
          <div className=" p-4 w-1/4">
            <h1 className="text-white text-xl font-semibold leading-normal">
              Premium
            </h1>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Price
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                $9.99/Month
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                $12.99/Month
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                $14.99/Month
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Content
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Access to a wide selection of movies and shows, including some
                new releases.
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Devices
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Watch on one device simultaneously
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Watch on Two device simultaneously
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Watch on Four device simultaneously
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Free Trail
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                7 Days
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                7 Days
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                7 Days
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Cancel Anytime
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Ad - Free
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                No
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Offline Viewing
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                No
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes, for select titles.
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes, for all titles.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Family Sharing
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4  flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                No
              </h1>
            </div>
            <div className="border-r border-t border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes, up to 5 family members.
              </h1>
            </div>
            <div className="border-t  border-slate-600 p-4 w-1/4 flex items-center ">
              <h1 className=" text-gray-500 text-lg font-medium leading-normal">
                Yes, up to 6 family members.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
