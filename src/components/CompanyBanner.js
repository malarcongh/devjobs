import React from "react";

function CompanyBanner(){
  return (
    <div className="company-banner">
      <div className="company-img-container">
        <img alt=""></img>
      </div>
      <div className="company-info">
        <div>
          <h2 className="company-title">Scoot</h2>
          <p className="company-link">https://example.com/scoot</p>
        </div>
        <button>Company Site</button>
      </div>
    </div>
  )
}

export default CompanyBanner;