import React from "react";

function TimelineCard({ role, company, logo, dateRange, link }) {
  return (
    <div className="timeline-item">
      <div className="line-connector"></div>
      <a className="link-wrapper" href={link} target="_blank" rel="noreferrer">
        <div className="timeline-content">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <div className="timeline-text">
            <h3>{role}</h3>
            <h4>{company}</h4>
            <p>{dateRange}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default TimelineCard;
