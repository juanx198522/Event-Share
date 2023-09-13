import React from 'react';

const EventList = ({ myEvent, title, onDelete, onUpdate }) => {
  if (!myEvent.length) {
    return <h3>No Events Available</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {myEvent &&
        myEvent.map((event) => (
          <div key={event.id}>
            <div>
              {event.title}
              {event.image}
              {event.description}
              {event.date}
              {event.price}
              {event.stock}
            </div>
            <div>
              <button onClick={() => onUpdate(event.id)}>Update</button>
              <button onClick={() => onDelete(event.id)}>Delete</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;