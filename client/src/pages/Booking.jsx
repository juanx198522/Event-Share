import React from 'react'

const Booking = () => {
  return (
    <div className='bg-[#2f3235] text-gray-300 w-full h-auto md:h-screen'>
      <div className='grid grid-cols-6 gap-4 pt-32'>
        <div className='col-start-2 col-span-4 p-4'>
          <div className='flex justify-center bg-gray-500 rounded-md items-center'>
            <div className=' justify-center text-center p-4'>
              <p className=' object-top text-2xl font-bold text-white tracking-wider'>
                My Cart
              </p>
            </div>
          </div>
          <div className=' bg-gray-500 rounded-md my-4'>
            <div className=' grid grid-cols-4 grid-rows-2 p-4'>
              <ul>
                <li className='col-start-1 col-end-1 font-bold text-white tracking-wider'>
                  <p>Title:</p>
                  <p>Description:</p>
                  <p>Date:</p>
                  <p>Price:</p>
                </li>
              </ul>
              <button className='col-start-4 col-end-4 font-bold text-white hover:bg-blue-500 rounded'>Price</button>
              <button className='col-start-4 col-end-4 font-bold text-white hover:bg-red-500 rounded'>Delete</button>
            </div>
          </div>
          <div className=' bg-gray-500 rounded-md my-4'>
            <div className=' grid grid-cols-4 p-4'>
              <p className='font-bold text-white'>Checkout</p>
              <button className='col-start-4 col-end-4 font-bold text-white'>Total</button>
            </div>
          </div>
          <div className='  bg-gray-500 rounded-md my-4'>
            <div className=' border-b-4 border-b-white grid grid-cols-4 p-4'>
              <p className='font-bold text-white '>Order History</p>
            </div>
            <div>
            <div className=' grid p-4'>
              <ul>
                <li className='border-b-2 col-start-1 col-end-4 font-bold text-white tracking-wider'>
                  <p>Title:</p>
                  <p>Description:</p>
                  <p>Date:</p>
                  <p>Price:</p>
                </li>
                <li className='col-start-1 col-end-1 font-bold text-white tracking-wider'>
                  <p>Title:</p>
                  <p>Description:</p>
                  <p>Date:</p>
                  <p>Price:</p>
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking