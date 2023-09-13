import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_EVENT } from '../utils/mutations';
const MyEvents = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
    price: '',
    stock: '',
    image: '',
  });
  const [addEvent, { error }] = useMutation(ADD_EVENT);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = addEvent({
        variables: { ...formState },
      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };
  return (
    <div
      name='contact'
<<<<<<< HEAD
      className='w-full h-auto bg-[#2f3235] flex justify-center items-center p-4 pt-32'
    >
      <form
        method='POST'
        action=''
        className='flex flex-col max-w-[600px] w-full pt-32'
=======
      className='w-full h-screen bg-[#2F3235] flex justify-center items-center p-4 pt-4'
    >
      <form
        onSubmit={handleFormSubmit}
        className='flex flex-col max-w-[600px] w-full'
>>>>>>> 32e0fae37aeecc9b1c8218d3be5ccc8de2e7f66f
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 py-3'>
            Create an Event
          </p>
        </div>
<<<<<<< HEAD
        <input 
          className='my-2 p-2 bg-[#ccd6f6] '
=======
        <input
          className='bg-[#CCD6F6]'
>>>>>>> 32e0fae37aeecc9b1c8218d3be5ccc8de2e7f66f
          type='text'
          placeholder='Title'
          name='title'
          value={formState.title}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
          className='my-2 p-2 bg-[#ccd6f6] '
=======
          className=' bg-[#CCD6F6] '
>>>>>>> 32e0fae37aeecc9b1c8218d3be5ccc8de2e7f66f
          name='date'
          type='text'
          placeholder='--/--/--'
          value={formState.date}
          onChange={handleChange}
        ></input>
        <input
<<<<<<< HEAD
          className='my-2 p-2 bg-[#ccd6f6] '
=======
          className=' bg-[#CCD6F6] '
>>>>>>> 32e0fae37aeecc9b1c8218d3be5ccc8de2e7f66f
          name='price'
          type='text'
          placeholder='$____'
          value={formState.price}
          onChange={handleChange}
        ></input>
        <input
<<<<<<< HEAD
          className='my-2 p-2 bg-[#ccd6f6] '
=======
          className=' bg-[#CCD6F6] '
>>>>>>> 32e0fae37aeecc9b1c8218d3be5ccc8de2e7f66f
          name='stock'
          type='text'
          placeholder='Number of tickets available'
          value={formState.stock}
          onChange={handleChange}
        ></input>
        <textarea
          className='my-2 p-2 rounded bg-[#CCD6F6]'
          rows='7'
          placeholder='Description'
          name='message'
          value={formState.description}
          onChange={handleChange}
        />
        <button className='bg-gray-300 text-blue-500 border-2 hover:bg-blue-500 hover:text-gray-300 px-8 py-3 my-8 mx-auto flex items-center font-bold'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MyEvents;
