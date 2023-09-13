import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_MYEVENT } from '../../utils/mutations';


const MyEventUpdate = () => {

    const [updateEvent] = useMutation(UPDATE_MYEVENT);

    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');
    const [updatedDate, setUpdatedDate] = useState('');
    const [updatedPrice, setUpdatedPrice] = useState(0);
    const [updatedStock, setUpdatedStock] = useState(0);
    const [updatedImage, setUpdatedImage] = useState('');

    const handleUpdate = async (eventId) => {
        try {
            const { data } = await updateEvent({
                variables: {
                    id: eventId,
                    title: updatedTitle,
                    description: updatedDescription,
                    date: updatedDate,
                    price: updatedPrice,
                    stock: updatedStock,
                    image: updatedImage,
                },
            });

            console.log('Updated event:', data.updateMyEvent);
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Title"
            />
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Image"

            />
            <textarea
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Description"
            />
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Date"
            />
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Price"
            />
            <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                placeholder="Updated Stock"
            />
            <button onClick={() => handleUpdate(eventId)}>Update Event</button>
        </div>
    );
};

export default YourComponent;