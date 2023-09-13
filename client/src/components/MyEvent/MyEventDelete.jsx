import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_MYEVENT } from '../../utils/mutations';

const MyEventDelete = ({ eventId }) => {

    const [deleteEvent] = useMutation(DELETE_MYEVENT);

    const handleDelete = async () => {
        try {
            const { data } = await deleteEvent({
                variables: {
                    id: eventId,
                },
            });

            console.log('Event deleted:', data);
        } catch (error) {
            console.error('Error deleting event:', error);
        }
    };

    return (
        <div>

        </div>
    );
};

export default MyEventDelete;