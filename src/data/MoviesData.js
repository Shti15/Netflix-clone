import React, { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export function MoviesData({ children }) {
  const [movieData, setMovieData] = useState([]); // Initialize state as an empty array
  const [loading, setLoading] = useState(true); // Loading state to indicate data fetching

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://advance-movie-api.p.rapidapi.com/api/v1/streamitfree/genres/horror/1";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "667b1a7968msh0f3b74188b301f6p11d7e6jsnd8335414a1c5",
          "x-rapidapi-host": "advance-movie-api.p.rapidapi.com",
          "X-RapidAPI-Proxy-Secret": "4d633e10-2ff4-11ef-a338-672c018612df",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const res = await response.json(); // Parse JSON response
        setMovieData(res); // Set movie data
        console.log(res);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false); // Stop loading once the request is done
      }
    };

    fetchData();
  }, []);

  return (
    <MovieContext.Provider value={[movieData, loading]}>
      {children}
    </MovieContext.Provider>
  );
}
