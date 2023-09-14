import React from 'react';
import { formatDate } from '../../utils/formatDate';

const EventList = ({ myEvent, title, onDelete, onUpdate }) => {
  if (!myEvent.length) {
    return <h3>No Events Available</h3>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <h3 className="text-xl font-semibold mb-4">List of events created:</h3>
      {myEvent &&
        myEvent.map((event) => (
          <div key={event.id} className="bg-white p-4 mb-4 rounded-lg shadow-md flex">
            <div className="flex-1">
              <div>
                <p><span className="font-semibold">Title:</span> {event.title}</p>
                <p><span className="font-semibold">Description:</span> {event.description}</p>
                <p><span className="font-semibold">Date:</span> {formatDate(event.date)}</p>
                <p><span className="font-semibold">Price:</span> ${event.price}</p>
              </div>
            </div>

            <div className="flex-none">
              <div className="mt-4 space-x-2">
                <button
                  onClick={() => onUpdate(event.id)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(event.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>

        ))}
    </div>
  );
};

export default EventList;
