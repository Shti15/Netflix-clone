import React, { useContext } from "react";
import { MovieContext } from "../data/MoviesData";
import next from "../assets/chevron-right11.png";
function TrendingMovies() {
  const [movieData, loading] = useContext(MovieContext);
  if (loading) {
    return <div>Loading...</div>;
  }

  // If movieData is still null or undefined after loading, handle gracefully
  if (!movieData || movieData.length === 0) {
    return <div>No data available</div>;
  }
  return (
    <>
      <div className="bg-base-100 flex">
        <h4 className="text-white bg-base-100 text-[30px] my-[20px] mx-[10px] font-Lato">
          Trending Movies
        </h4>
        <img src={next} className="w-[40px] h-[30px] my-[27px]"></img>
      </div>

      <div className="flex overflow-x-auto space-x-4 py-2 bg-base-100">
        <div className="flex space-x-4 w-full">
          {movieData.result.data.map((movie, index) => (
            <Card key={index} source={movie.Cover} title={movie.Title}></Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default TrendingMovies;
