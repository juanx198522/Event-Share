import React from 'react';

const EventList = ({ myEvent, title, onDelete, onUpdate }) => {
  if (!myEvent.length) {
    return <h3>No Events Available</h3>;
  }

  return (
    <div>
      <h3>List of events created</h3>
      <br></br>
      {myEvent &&
        myEvent.map((event) => (
          <div key={event.id}>
            <div>
              {event.title}
              <br></br>
              {event.image}
              <br></br>
              {event.description}
              <br></br>
              {event.date}
              <br></br>
              {event.price}
              <br></br>
              {event.stock}              
            </div>
            <div>
              <button onClick={() => onUpdate(event.id)}>Update</button>
              <button onClick={() => onDelete(event.id)}>Delete</button>
              <br></br>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;