import React from "react";

function DisplayDetails({ name, event_name, date }) {
  return (
    <div className="design">
      <p className="large padding">
        Completed By <span className="bold">{name}</span>
      </p>
      <p className="padding">{event_name}</p>
      <p className="padding">{date}</p>
    </div>
  );
}

export default DisplayDetails;
