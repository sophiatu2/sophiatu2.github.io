import React from "react";

function TimelineCard({ role, company, logo, dateRange, side }) {
  return (
    <div className={`timeline-item ${side}`}>
      <div className="timeline-content">
        {side === "right" && (
          <img
            src={logo}
            alt="Company Logo"
            className="company-logo right-logo"
          />
        )}
        <div className="timeline-text">
          <h3>{role}</h3>
          <h4>{company}</h4>
          <p>{dateRange}</p>
        </div>
        {side === "left" && (
          <img
            src={logo}
            alt="Company Logo"
            className="company-logo left-logo"
          />
        )}
      </div>
      <div className="line-connector"></div>
    </div>
  );
}

export default TimelineCard;
