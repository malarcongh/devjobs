import React from "react";

import SearchBar from "../components/SearchBar";
import JobGrid from "../components/JobGrid";

function Home(){
  return (
    <main className="home-container">
      <SearchBar />
      <JobGrid />
    </main>
  );
}

export default Home;