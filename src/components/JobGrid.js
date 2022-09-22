import React from "react";
import JobCard from "./JobCard";

function JobGrid(){
  return (
    <div className="job-grid">
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  );
}

export default JobGrid;