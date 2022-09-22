import React, {Fragment} from "react";
import CompanyBanner from "../components/CompanyBanner";
import JobDetails from "../components/JobDetails";
import JobFooter from "../components/JobFooter";

function Job(){

  return (
    <Fragment>
      <main className="job-description-container">
        <CompanyBanner />
        <JobDetails />
      </main>
      <footer>
        <JobFooter />
      </footer>
    </Fragment>
  )

}

export default Job;