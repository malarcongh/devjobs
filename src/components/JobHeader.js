import React from 'react';

function JobHeader(){
  return (
    <div className="job-header">
      <div className="header-text">
        <p>
          <span>5h ago</span>
          {' · '}
          <span>Full Time</span>
        </p>
        <h2>Senior Software Engineer</h2>
        <p className='job-location'>United Kingdom</p>
      </div>
      <button>Apply Now</button>
    </div>
  );
}

export default JobHeader;