import axios from "../axios";

export const fetchTrendingMovies = () =>
  axios.get(
    `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

export const fetchFilteredMovies = (apiKey, year, type) =>
  axios.get(
    `/discover/movie?api_key=${apiKey}&original_language=%22en%22&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31&with_genres=${type}`
  );

export const fetchGenres = () =>
  axios.get(
    `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

export const fetchMovieReviews = (id) =>
  axios.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
  );


  export const fetchMovie = (id) => 
  axios.get(
    `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );