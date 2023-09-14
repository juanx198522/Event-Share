import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PUBLICEVENT } from '../utils/queries';
import { formatDate } from '../utils/formatDate';

const Events = () => {
  const { loading, data } = useQuery(QUERY_PUBLICEVENT);
  const eventData = data?.publicEvents || [];

  if (!eventData.length) {
    return <h3>No Events available</h3>;
  }

  return (
    <div className="bg-gray-100 p-4">
            <div className='grid gap-4 pt-32'>

      <h3 className="text-xl font-semibold mb-4">List of events:</h3>
      {eventData.map((PublicEvent) => (
        <div key={PublicEvent.id} className="bg-white p-4 mb-4 rounded-lg shadow-md flex">
          <div className="flex-1">
            <div>
              <p><span className="font-semibold">Title:</span> {PublicEvent.title}</p>
              <p><span className="font-semibold">Description:</span> {PublicEvent.description}</p>
              <p><span className="font-semibold">Date:</span> {formatDate(PublicEvent.date)}</p>
              <p><span className="font-semibold">Price:</span> ${PublicEvent.price}</p>
            </div>
          </div>
          <div className="flex-none">
            <div className="mt-4 space-x-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to cart
              </button>
            </div>
          </div>

        </div>

      ))}
    </div>
    </div>

  );
};

export default Events;
