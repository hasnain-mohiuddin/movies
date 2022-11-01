import PopularMovies from "components/Home/PopularMovies";
import SearchFormSection from "components/Home/SearchFormSection";

const Dashboard = () => {
  return (
    <>
      <SearchFormSection />
      <PopularMovies />
    </>
  );
};

export default Dashboard;
