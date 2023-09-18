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
      name='my-events'
      className='w-full h-screen bg-gray-100 flex justify-center p-4 pt-2'
    >
    <form
        onSubmit={handleFormSubmit}
        className='flex flex-col max-w-[600px] w-full pt-10'
    >
      <div className='pb-10'>
          <h1 className="text-5xl font-semibold text-black leading-tight pb-5">All Events</h1>
          <p className='text-3xl font-bold inline border-b-4 border-blue-500 text-black-300 py-3'>
            Create an Event
          </p>
        </div>
        {/* Title */}
        <div className="mb-6">
          <label for="email" className="block mb-2 font-semibold text-gray-900 dark:text-white">Event Title</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text" 
            name='title'
            placeholder='Pool party at sunset'
            value={formState.title}
            onChange={handleChange}
            required />
        </div>
        {/* Description */}
        <div className="mb-6">
          <label for="email" className="block mb-2 font-semibold text-gray-900 dark:text-white">Description</label>
          <textarea 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text" 
            rows='5'
            name='description'
            placeholder='Add description here'
            value={formState.description}
            onChange={handleChange}
            required />
        </div>
        {/* Date */}
        <div className="mb-6">
          <label for="email" className="block mb-2 font-semibold text-gray-900 dark:text-white">
            Date</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="date" 
            name='date'
            value={formState.date}
            onChange={handleChange}
            required />
        </div>
         {/* Price */}
         <div className="mb-6">
          <label for="email" className="block mb-2 font-semibold text-gray-900 dark:text-white">
            Price ($)</label>
          <input 
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text" 
            name='price'
            placeholder='100'
            value={formState.price}
            onChange={handleChange}
            required />
        </div>
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

{/* 
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

*/}
