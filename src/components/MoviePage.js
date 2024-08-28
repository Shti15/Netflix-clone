import React, { useContext } from "react";
import { MovieContext } from "../data/MoviesData";
import poster from "../assets/poster1.jpg";

function MoviePage() {
  const [movieData, loading] = useContext(MovieContext);
  if (loading) {
    return <div>Loading...</div>;
  }

  // If movieData is still null or undefined after loading, handle gracefully
  if (!movieData || movieData.length === 0) {
    return <div>No data available</div>;
  }

  const Movie = movieData.result.data[0].Cover;
  return (
    <>
      <div className="relative bg-cover bg-center h-screen w-full bg-base-100 bg-gradient-to-r from-black via-transparent to-black ">
        <h2 className="absolute font-playfair text-white text-[45px] w-[230px] mx-[40px] mt-[20px]">
          {movieData.result.data[0].Title}
        </h2>
        <p className="absolute text-white  w-[330px] mx-[40px] mt-[240px]">
          {" "}
          {movieData.result.data[0].Description}
        </p>
        <p className="absolute text-white  w-[230px] mx-[40px] mt-[400px]">
          Rating : {movieData.result.data[0].Rating}
        </p>
        <button
          type="button"
          className="absolute btn bg-[#E50914] btn-md px-2 me-md-2 my-[15px] tracking-[1px] border-[#E50914]  text-white  mx-[40px]  mt-[460px]"
        >
          Watch Now
        </button>
        <img
          src={Movie}
          alt="Movie Poster"
          className=" absolute top-0 inset-x-0 h-screen w-[1025px] mx-[490px] mt-[0px] "
        />
      </div>
    </>
  );
}

export default MoviePage;
