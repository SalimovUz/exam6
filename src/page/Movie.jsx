import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import { eye, left, rBtn, right } from ".";

const Movie = () => {
  const [Movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/now_playing`, {
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
    <div>
      <div className="movies px-6 py-24  container  mx-auto">
        <div className="our_genres">
          <div>
            <div className="flex justify-between">
              <h1 className="text-white text-2xl font-bold leading-normal md:text-3xl lg:text-4xl">
                Our Genres
              </h1>
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
            <div className="md:flex hidden justify-center gap-4 mt-4">
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(4, 6).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(8, 10).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Horror
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular_top_10 mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-white text-2xl font-bold leading-normal md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
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
            <div className="md:flex hidden justify-center gap-4 mt-4">
              <div className="bg-[#1A1A1A] py-7 px-8 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"80px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"80px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className=" bg-red-600 rounded-lg p-1 flex justify-center ">
                      <h1 className="text-white text-sm font-normal">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-white text-sm font-semibold leading-normal">
                      Action
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] py-7 px-8 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"80px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"80px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className=" bg-red-600 rounded-lg p-1 flex justify-center ">
                      <h1 className="text-white text-sm font-normal">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-white text-sm font-semibold leading-normal">
                      Adventure
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] py-7 px-8 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"80px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"80px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className=" bg-red-600 rounded-lg p-1 flex justify-center ">
                      <h1 className="text-white text-sm font-normal">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-white text-sm font-semibold leading-normal">
                      Comedy
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] py-7 px-8 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(16, 18).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"80px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"80px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className=" bg-red-600 rounded-lg p-1 flex justify-center ">
                      <h1 className="text-white text-sm font-normal">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-white text-sm font-semibold leading-normal">
                      Drama
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="bg-[#1A1A1A] p-5 rounded-lg">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id} className="cursor-pointer">
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"60px"}
                      />
                      <img
                        className=" opacity-25 rounded-b-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"60px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <h1 className="text-white text-sm font-semibold leading-normal">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending_now mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-white text-2xl font-bold leading-normal md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
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
            <div className="hidden md:flex gap-4 justify-center">
              {Movies.slice(0, 5).map((movie) => (
                <div
                  key={movie.id}
                  className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer"
                >
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"140px"}
                  />
                  <div className="flex bg-black px-2 py-1 gap-2 rounded-b-lg">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex md:hidden gap-3 justify-center">
              {Movies.slice(0, 4).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A] cursor-pointer">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex bg-black px-2 py-1 gap-2">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="new_releases mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-white text-2xl font-bold leading-normal md:text-3xl lg:text-4xl">
                New Releases
              </h1>
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
            <div className="hidden md:flex gap-4 justify-center">
              {Movies.slice(5, 10).map((movie) => (
                <div
                  key={movie.id}
                  className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer"
                >
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"140px"}
                  />
                  <div className="flex bg-black px-2 py-1 gap-2 rounded-b-lg">
                    <p className=" text-gray-600">{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex md:hidden gap-3 justify-center">
              {Movies.slice(5, 9).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A] cursor-pointer">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex bg-black px-2 py-1 gap-2">
                    <p className=" text-gray-600 text-xs">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
