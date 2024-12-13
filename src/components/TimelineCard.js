import React from "react";

function TimelineCard({ item }) {
  // Format date helper
  function formatDate(date) {
    if (date === "Present") return date;
    const [year, month] = date.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  }

  const skillsList = item.skills.join(", ");

  return (
    <div className="timeline-item">
      <div className="line-connector"></div>
      <a
        className="link-wrapper"
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="timeline-content">
          <img src={item.logo} alt="Company Logo" className="company-logo" />
          <div className="timeline-text">
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <p>
              {formatDate(item.startDate)} - {formatDate(item.endDate)}
            </p>
            <p>
              <strong>Skills: </strong> {skillsList}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default TimelineCard;
