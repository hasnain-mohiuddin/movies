import React from "react";
import SearchFormSection from "./components/SearchFormSection.js";
import PopularMovies from "./components/PopularMovies.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <>
      <Navbar />
      <SearchFormSection />
      <PopularMovies />
    </>
  );
}

export default App;
