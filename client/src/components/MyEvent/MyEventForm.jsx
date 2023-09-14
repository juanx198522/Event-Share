import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_MYEVENT } from '../../utils/mutations';

const MyEventForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
    price: '',
  });

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const [addEvent, { error }] = useMutation(CREATE_MYEVENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('test')
      const { data } = addEvent({
        variables: { ...formState, price: parseInt(formState.price), stock: parseInt(formState.stock) },

      });
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newState = { ...formState, [name]: value }
    setFormState(newState);
  };

  return (
    <div
      name='contact'
      className='w-full h-screen bg-gray-100 flex justify-center items-center p-4 pt-4'
    >
      <form
        onSubmit={handleFormSubmit}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-black-300 py-3'>
            Create an Event
          </p>
        </div>
        <p className='text-black font-bold text-left'>Title:</p>
        <input
          className='bg-[#CCD6F6]'
          type='text'
          placeholder='Pool party at sunset'
          name='title'
          value={formState.title}
          onChange={handleChange}
        />
        <p className='text-black font-bold text-left'>Description:</p>
        <textarea
          className='my-2 p-2 rounded bg-[#CCD6F6]'
          rows='7'
          placeholder='Enjoy an hour dinner party by the pool'
          name='description'
          value={formState.description}
          onChange={handleChange}
        />
        <p className='text-black font-bold text-left'>Date:</p>
        <input
          className=' bg-[#CCD6F6] '
          name='date'
          type='text'
          placeholder='1/1/2023'
          value={formState.date}
          onChange={handleChange}
        />
        <p className='text-black font-bold text-left'>Price:</p>
        <input
          className=' bg-[#CCD6F6] '
          name='price'
          type='text'
          placeholder='100'
          value={formState.price}
          onChange={handleChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Submit
        </button>

      </form>
    </div>
  );
};
export default MyEventForm;
