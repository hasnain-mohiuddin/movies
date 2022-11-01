import { useLocation } from "react-router-dom";
import MoviesGridList from "components/Home/MoviesGridList";
import SearchFormSection from "components/Home/SearchFormSection";
import quryString from "query-string";
import { useEffect, useMemo, useState } from "react";
import { fetchFilteredMedia } from "services/moviesService";
import { SEARCH_MOVIE } from "constants/constants";

const SearchedMedia = () => {
  const location = useLocation();
  const [filterMedia, setFilterMedia] = useState([]);
  const [mediaCount, setMediaCount] = useState(0);

  const parsed = useMemo(() => {
    return quryString.parse(location.search);
  }, [location.search])

  useEffect(() => {
    getSearchedItems(1);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parsed]);

  const getSearchedItems = async (page = 1) => {
    const { data } = await fetchFilteredMedia(
      parsed.media,
      parsed.year,
      parsed.genre,
      page
    );
    setFilterMedia([...data.results]);
    setMediaCount(data.total_pages);
  };

  const handleChange = (event, value) => {
    getSearchedItems(value);
  };

  return (
    <>
      <SearchFormSection />
      <MoviesGridList
        moviesList={filterMedia}
        mediaCount={mediaCount}
        onHandleChange={handleChange}
        title={SEARCH_MOVIE}
        mediaType={parsed.media}
      />
    </>
  );
};
export default SearchedMedia;
