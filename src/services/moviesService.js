import axios from "../axios";

export const fetchTrendingMovies = () =>
  axios.get(
    `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

export const fetchFilteredMedia = (mediaType, year, genre) =>
  axios.get(
    `/discover/${mediaType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&original_language=%22en%22&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31&with_genres=${genre}`
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

export const fetchTvShow = (id) =>
  axios.get(
    `/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

export const rateMedia = (mediaType, mediaId, rating) =>
  axios.post(
    `/${mediaType}/${mediaId}/rating?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    { value: rating }
  );
