import React from "react";

function JobCard(){
  return (
    <div className="job-card">
      <span className="job-img-container">
        <img alt=""/>
      </span>
      <p className="job-info">
        <span className="time-stamp">5h ago</span>
        {' · '}
        <span className="work-time">Full Time</span>
      </p>
      <h2 className="job-title">Senior Software Engineer</h2>
      <p className="job-company">Scoot</p>
      <p className="job-location">United Kingdom</p>
    </div>
  )
}

export default JobCard;