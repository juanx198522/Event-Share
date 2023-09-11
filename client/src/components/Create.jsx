import React from 'react';

const Create = () => {
  return (
    <div
      name='contact'
      className='w-full h-screen bg-[#2f3235] flex justify-center items-center p-4 pt-4'
    >
      <form
        method='POST'
        action=''
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-500 text-gray-300 py-3'>
            Create an Event
          </p>
        </div>
        <input
          className='bg-[#ccd6f6]'
          type='text'
          placeholder='Title'
          name='title'
        />
        <input
          className=' bg-[#ccd6f6] '
          name='date'
          type='text'
          placeholder='--/--/--'
        ></input>
        <input
          className=' bg-[#ccd6f6] '
          name='price'
          type='text'
          placeholder='$____'
        ></input>
        <input
          className=' bg-[#ccd6f6] '
          name='stock'
          type='text'
          placeholder='Number of tickets available'
        ></input>

         <textarea
          className='my-2 p-2 rounded bg-[#ccd6f6]'
          rows='7'
          placeholder='Description'
          name='message'
        />
        <button className='bg-gray-300 text-blue-500 border-2 hover:bg-blue-500 hover:text-gray-300 px-8 py-3 my-8 mx-auto flex items-center font-bold'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
