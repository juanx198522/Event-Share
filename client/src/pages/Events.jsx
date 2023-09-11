import React from 'react';

const Events = () => {
  return (
    <div className='bg-[#2f3235] text-white font-bold items-center w-screen p-4 h-screen'>
      <div className='grid grid-cols-6 gap-4'>
        <div className='col-start-2 col-span-4 p-4'>
          <div className='flex justify-center bg-gray-500 rounded-md items-center'>
            <div className=' justify-center text-center p-4'>
              <p className='text-2xl tracking-wider'>
                List of Events
              </p>
            </div>
          </div>
          <div className='flex flex-row justify-end my-4 space-x-2'>
            <div className='bg-gray-500 rounded-md p-4 gap-4'>
              <button className=' text-lg tracking-wider'>
                Filter
              </button>
            </div>
            <div className='bg-gray-500 rounded-md p-4'>
              <button className=' text-lg tracking-wider'>
                Sort
              </button>
            </div>
          </div>
          <div className=' bg-gray-500 rounded-md my-4'>
            <div className=' grid grid-cols-4 p-4'>
              <ul>
                <li className='col-start-1 col-end-1 tracking-wider'>
                  <p>Title:</p>
                  <p>Description:</p>
                  <p>Date:</p>
                  <p>Price:</p>
                </li>
              </ul>
              <button className='col-start-4 col-end-4'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
