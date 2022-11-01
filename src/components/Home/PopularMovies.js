import React, { useEffect, useState } from "react";

import MoviesGridList from "./MoviesGridList";
import { POPULAR_MOVIES_TITLE } from "constants/constants";
import { fetchTrendingMovies } from "services/moviesService";

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);

  const fetchTrending = async (pageNumber) => {
    try {
      const { data } = await fetchTrendingMovies(pageNumber);
      setMediaCount(data.total_pages);
      setPopularMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event, value) => {
    fetchTrending(value);
  };

  useEffect(() => {
    fetchTrending(1);
  }, []);

  return (
    <MoviesGridList
      title={POPULAR_MOVIES_TITLE}
      mediaCount={mediaCount}
      onHandleChange={handleChange}
      moviesList={popularMovies}
    />
  );
};

export default PopularMovies;
