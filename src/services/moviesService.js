import axios from "../axios";
import { getSessionId } from "./sessionService";

export const fetchTrendingMovies = (pageNumber) =>
  axios.get(
    `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNumber}`
  );

export const fetchFilteredMedia = (mediaType, year, genre, pageNumber) =>
  axios.get(
    `/discover/${mediaType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&original_language=%22en%22&primary_release_date.gte=${year}-01-01&primary_release_date.lte=${year}-12-31&with_genres=${genre}&page=${pageNumber}`
  );

export const fetchGenres = () =>
  axios.get(
    `/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
  );

export const fetchMovieReviews = (id, pageNumber) =>
  axios.get(
    `/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=${pageNumber}`
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
    `/${mediaType}/${mediaId}/rating?api_key=${process.env.REACT_APP_TMDB_API_KEY}&guest_session_id=${getSessionId()}`,
    { value: rating }
  );
