import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BOOKINGS } from '../utils/queries';

const Booking = () => {
  const { loading, error, data } = useQuery(GET_USER_BOOKINGS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const userBookings = data.userBookings;

  return (
    <div>
      <h1>Your Bookings</h1>
      <ul>
        {userBookings.map((booking) => (
          <li key={booking._id}>
            <p>Event Name: {booking.event.title}</p>
            <p>Booking Date: {booking.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;