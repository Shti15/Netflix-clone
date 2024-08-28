import React, { useContext } from "react";
import { MovieContext } from "../data/MoviesData";
import { useNavigate } from "react-router-dom";

function Hero() {
  const [movieData, loading] = useContext(MovieContext);
  const navigate = useNavigate();
  if (loading) {
    return <div>Loading...</div>;
  }

  // If movieData is still null or undefined after loading, handle gracefully
  if (!movieData || movieData.length === 0) {
    return <div>No data available</div>;
  }

  // Access the first movie's big_img property safely
  const trendingSeries = movieData.result.data[0].Cover;

  return (
    <div
      className=" hero min-h-screen"
      style={{
        backgroundImage: `url(${trendingSeries})`,
      }}
    >
      {/* <div className="col-md-6 ">
      <h1 className="display-5 fw-bold  lh-3 mb-3 text-[65px]  text-white mx-[15px]">{ movieData.result.data[0].Title}</h1>
      <p className="lead  text-white tracking-[2px] mx-[15px]">{ movieData.result.data[0].Description}</p>
      <p className="lead  text-white my-[15px] tracking-[2px] mx-[15px]">Rating : { movieData.result.data[0].Rating}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start my-[15px] mx-[15px]">
        <button type="button" className="btn bg-[#E50914] btn-md px-2 me-md-2 my-[15px] tracking-[1px] mx-[15px]">Watch Now</button>
      </div>
    </div> */}
      <div className=" hero-overlay bg-opacity-20"></div>
      <div className=" text-neutral-content text-left ">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold display-5 fw-bold   text-[65px]  text-white">
            {" "}
            {movieData.result.data[0].Title}
          </h1>
          <p className="mb-5 lead  text-white tracking-[1px] font-Lato">
            {movieData.result.data[0].Description}
          </p>
          <button
            type="button"
            className="btn bg-[#E50914] btn-md px-2 me-md-2 my-[15px] tracking-[1px] border-[#E50914]  text-white "
            onClick={() => navigate("/MoviePage")}
          >
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
