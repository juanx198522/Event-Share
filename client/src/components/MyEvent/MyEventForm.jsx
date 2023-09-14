import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_MYEVENT } from '../../utils/mutations';

const MyEventForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
    price: '',
    stock: '',
    image: '',
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
      // window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newState = {...formState, [name]: value}
    setFormState(newState);
  };

  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#2F3235] flex justify-center items-center p-4 pt-4'
    >
      <form
        onSubmit={handleFormSubmit}
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 py-3'>
            Create an Event
          </p>
        </div>
        <input
          className='bg-[#CCD6F6]'
          type='text'
          placeholder='Title'
          name='title'
          value={formState.title}
          onChange={handleChange}
        />
        <input

          className='bg-[#CCD6F6]'
          type='file'
          name='image'
          value={formState.image}
          onChange={handleChange}
        />
        <textarea
          className='my-2 p-2 rounded bg-[#CCD6F6]'
          rows='7'
          placeholder='Description'
          name='description'
          value={formState.description}
          onChange={handleChange}
        />
        <input

          className=' bg-[#CCD6F6] '

          name='date'
          type='text'
          placeholder='--/--/--'
          value={formState.date}
          onChange={handleChange}
        />
        <input
          className=' bg-[#CCD6F6] '
          name='price'
          type='text'
          placeholder='$____'
          value={formState.price}
          onChange={handleChange}
        />
        <input
          className=' bg-[#CCD6F6] '
          name='stock'
          type='text'
          placeholder='Number of tickets available'
          value={formState.stock}
          onChange={handleChange}
        ></input>
        <button className='bg-gray-300 text-blue-500 border-2 hover:bg-blue-500 hover:text-gray-300 px-8 py-3 my-8 mx-auto flex items-center font-bold'>
          Submit
        </button>
      </form>
    </div>
  );
};
export default MyEventForm;
