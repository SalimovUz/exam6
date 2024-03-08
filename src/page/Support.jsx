import React, { useState } from "react";
import { Minus, Plus} from ".";

const Support = () => {
  // increment
  const [questions, setQuestions] = useState("hidden");
  const [question, setQuestion] = useState("");
  const [questions2, setQuestions2] = useState("hidden");
  const [question2, setQuestion2] = useState("");
  const [questions3, setQuestions3] = useState("hidden");
  const [question3, setQuestion3] = useState("");
  const [questions4, setQuestions4] = useState("hidden");
  const [question4, setQuestion4] = useState("");
  const [questions5, setQuestions5] = useState("hidden");
  const [question5, setQuestion5] = useState("");
  const [questions6, setQuestions6] = useState("hidden");
  const [question6, setQuestion6] = useState("");
  // end increment

  return (
    <div className="p-6  container  mx-auto pt-20 md:pt-24 ">
      <div>
        <h1 className="text-white text-2xl md:text-[28px] font-bold leading-normal">
          Welcome to our support page!
        </h1>
        <p className=" text-slate-500 text-base font-normal leading-normal">
          We're here to help you with any problems you may be having with our
          product.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="lg:w-3/4">
          <form className="bg-black p-6 rounded-lg mt-5 border border-slate-600">
            <div className="flex flex-col gap-3 md:grid grid-cols-2 md:gap-4">
              <label className="flex flex-col gap-2" id="first_name">
                <h1 className="text-white text-base font-semibold leading-normal md:text-lg">
                  Frist Name
                </h1>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="Enter Nirst Name"
                  className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white outline-none"
                />
              </label>
              <label className="flex flex-col gap-2" id="last_name">
                <h1 className="text-white text-base font-semibold leading-normal md:text-lg">
                  Last Name
                </h1>
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter Last Name"
                  className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white outline-none"
                />
              </label>
              <label className="flex flex-col gap-2" id="email">
                <h1 className="text-white text-base font-semibold leading-normal md:text-lg">
                  Email
                </h1>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your Email"
                  className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white outline-none"
                />
              </label>
              <label className="flex flex-col gap-2" id="phone_number">
                <h1 className="text-white text-base font-semibold leading-normal md:text-lg">
                  Frist Name
                </h1>
                <div className="flex gap-2">
                  <select className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white">
                    <option value="uzb">UZB</option>
                  </select>
                  <input
                    type="text"
                    name="phone_number"
                    required
                    placeholder="Enter Phone Number"
                    className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white outline-none w-full"
                  />
                </div>
              </label>
            </div>
            <label className="flex flex-col gap-2 mt-3" id="message">
              <h1 className="text-white text-base font-semibold leading-normal md:text-lg">
                Message
              </h1>
              <input
                type="text"
                name="message"
                placeholder="Enter your Message"
                className="bg-[#141414] rounded-lg p-4 lg:p-5 text-white outline-none"
              />
            </label>
            <div className="mt-3">
              <div className="flex gap-1 items-center">
                <input type="checkbox" required className="w-6 h-6" />
                <p className=" text-gray-600 text-base lg:text-lg font-normal leading-normal">
                  I agree with Terms of Use and Privacy Policy
                </p>
              </div>
              <button
                type="submit"
                className="bg-red-700 text-white px-5 py-[14px] text-sm lg:text-base font-semibold leading-normal rounded-lg w-full mt-3 hover:bg-red-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="Questions mt-10 p-6  container  mx-auto">
        <div className="md:flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl md:text-[28px] font-bold leading-normal">
              Frequently Asked Questions
            </h1>
            <p className=" text-slate-500 text-base font-normal leading-normal ">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <button className="py-[14px] px-5 bg-[#E60000] text-white rounded-lg mt-4 hover:bg-red-400">
            Ask a Question
          </button>
        </div>
        <div className="mt-20  flex flex-col gap-7 md:grid grid-cols-2">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    01
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  What is StreamVibe?
                </h1>
              </div>
              <button
                className={`${questions}`}
                onClick={() => {
                  setQuestions("hidden");
                  setQuestion("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question}`}
                onClick={() => {
                  setQuestion("hidden");
                  setQuestions("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={`text-slate-600 text-sm font-normal leading-normal mt-2 ${questions}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    02
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  How much does StreamVibe cost?
                </h1>
              </div>
              <button
                className={`${questions2}`}
                onClick={() => {
                  setQuestions2("hidden");
                  setQuestion2("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question2}`}
                onClick={() => {
                  setQuestion2("hidden");
                  setQuestions2("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` text-slate-600 text-sm font-normal leading-normal mt-2 ${questions2}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    03
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  What content is available on StreamVibe?
                </h1>
              </div>
              <button
                className={`${questions3}`}
                onClick={() => {
                  setQuestions3("hidden");
                  setQuestion3("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question3}`}
                onClick={() => {
                  setQuestion3("hidden");
                  setQuestions3("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` text-slate-600 text-sm font-normal leading-normal mt-2 ${questions3}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    04
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  How can I watch StreamVibe?
                </h1>
              </div>
              <button
                className={`${questions4}`}
                onClick={() => {
                  setQuestions4("hidden");
                  setQuestion4("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question4}`}
                onClick={() => {
                  setQuestion4("hidden");
                  setQuestions4("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` text-slate-600 text-sm font-normal leading-normal mt-2 ${questions4}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    05
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  How do I sign up for StreamVibe?
                </h1>
              </div>
              <button
                className={`${questions5}`}
                onClick={() => {
                  setQuestions5("hidden");
                  setQuestion5("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question5}`}
                onClick={() => {
                  setQuestion5("hidden");
                  setQuestions5("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` text-slate-600 text-sm font-normal leading-normal mt-2 ${questions5}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#262626]  p-3 rounded-lg">
                  <h1 className="text-white text-base font-semibold leading-6">
                    06
                  </h1>
                </div>
                <h1 className="text-white text-lg font-medium leading-normal">
                  What is the StreamVibe free trial?
                </h1>
              </div>
              <button
                className={`${questions6}`}
                onClick={() => {
                  setQuestions6("hidden");
                  setQuestion6("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${question6}`}
                onClick={() => {
                  setQuestion6("hidden");
                  setQuestions6("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` text-slate-600 text-sm font-normal leading-normal mt-2 ${questions6}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="block w-full h-px bg-red-700 mt-7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
