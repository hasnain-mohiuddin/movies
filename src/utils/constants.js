export const APP_TITLE = "TMDB";
export const FORM_HEADER_TITLE = "  Search your Movie:";
export const REVIEWS = "reviews";
export const POPULAR_MOVIES_TITLE = "Last Week Popular Movies:";
export const GENERES_DROP_DOWN_LABEL = "Select Genres: ";
export const SEARCH_MOVIE = "Search movie";

export const GET_CARD_IMAGE_LINK = (imagePath) => {
  return `https://image.tmdb.org/t/p/w220_and_h330_face${imagePath}`;
};

export const GET_RATING_SATRS = (averageScore) => {
  return (averageScore / 2).toFixed(1);
};

export const GET_RATING_SCORE = (averageScore) => {
  return `${parseInt(averageScore * 10)}%`;
};
