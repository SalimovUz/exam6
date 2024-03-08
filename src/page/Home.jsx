import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  gaming,
  laptop,
  left,
  Minus,
  play,
  Plus,
  right,
  smart,
  tablet,
  tv,
  vr,
} from "./index";
import { BASE_URL } from "../constants/constants";

const Home = () => {
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

  const [price, setPrice] = useState("$9.99");
  const [price2, setPrice2] = useState("$12.99");
  const [price3, setPrice3] = useState("$14.99");
  const [date, setDate] = useState("/month");
  const [active, setActive] = useState(false);

  const [Movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="Home bg-center ">
      <div className="Header p-6">
        <div className="container  mx-auto">
          <div className="mt-[500px] md:mt-[570px] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center gap-5 absolute top-[500px] md:top-[550px] lg:top-[580px]">
              <h1 className="text-white font-bold text-3xl md:4xl leading-normal  w-96 text-center md:w-auto">
                The Best Streaming Experience
              </h1>
              <p className=" text-gray-500 font-normal text-sm leading-normal w-96 text-center md:hidden">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere.
              </p>
              <p className="hidden md:flex text-gray-500 font-normal text-sm leading-normal text-center w-[73%] lg:w-2/3">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                the latest blockbusters, classic movies, popular TV shows, and
                more. You can also create your own watchlists, so you can easily
                find the content you want to watch.
              </p>
              <button className="flex items-center gap-2 py-[14px] px-6 bg-red-500 rounded-lg text-white font-semibold text-sm md:text-lg hover:bg-red-400">
                <img src={play} alt="play" width={"15px"} height={"16px"} />
                Start Watching Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="categories mt-60 p-6  container  mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white text-2xl md:text-[28px] font-bold leading-normal">
              The Most Viewed On Our Page
            </h1>
            <p className=" text-slate-500 text-base font-normal leading-normal">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <div className="hidden md:flex items-center bg-black py-2 px-2 rounded-lg ">
            <button className="p-3 bg-[#1A1A1A] rounded-lg mr-2 hover:bg-orange-500">
              <img src={left} alt="left" width={"17px"} height={"15px"} />
            </button>
            <span className=" w-6 h-1 rounded-[100px] bg-red-500"></span>
            <span className=" w-6 h-1 rounded-[100px] bg-slate-900 ml-1"></span>
            <span className=" w-6 h-1 rounded-[100px] bg-slate-900 ml-1"></span>
            <span className=" w-6 h-1 rounded-[100px] bg-slate-900 ml-1"></span>
            <button className="p-3 bg-[#1A1A1A] rounded-lg ml-2 hover:bg-orange-500">
              <img src={right} alt="right" width={"17px"} height={"15px"} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 gap-5">
          <div className="flex items-center justify-center gap-5">
            {Movies.slice(0, 2).map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col gap-2 items-center bg-[#1A1A1A] p-3 rounded-lg"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt="img"
                  width={"200px"}
                  className="rounded"
                />
                <h1 className="text-white">{movie.title}</h1>
              </div>
            ))}
          </div>
          <div className="hidden md:flex items-center justify-center gap-5">
            {Movies.slice(2, 5).map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col gap-2 items-center bg-[#1A1A1A] p-3 rounded-lg"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt="img"
                  width={"200px"}
                  className="rounded"
                />
                <h1 className="text-white">{movie.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="devices mt-20 p-6  container  mx-auto">
        <div>
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
        <div className="md:grid grid-cols-3 mt-14 flex flex-col gap-5">
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={smart} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                Smartphones
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={tablet} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                Tablet
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={tv} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                Smart TV
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={laptop} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                Laptops
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={gaming} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                Gaming Consoles
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="bg-black rounded-lg border border-gray-500 flex flex-col gap-3 p-6 md:p-10 lg:p-12">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[#141414] flex justify-center py-[14px] px-5 rounded-lg">
                <img src={vr} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-white md:text-xl lg:text-2xl text-lg font-semibold leading-normal">
                VR Headsets
              </h1>
            </div>
            <p className=" text-slate-600 text-sm lg:text-lg md:text-base font-normal leading-normal">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
      <div className="Questions mt-20 p-6  container  mx-auto">
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
      <div className="Price p-6  container  mx-auto ">
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
    </div>
  );
};

export default Home;
