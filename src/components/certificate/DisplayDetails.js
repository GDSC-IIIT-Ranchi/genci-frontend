import React from 'react'

function DisplayDetails({name , event_name , date}) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{event_name}</h2>
      <h2>{date}</h2>
    </div>
  );
}

export default DisplayDetails