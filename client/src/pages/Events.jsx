import React from 'react';
// import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_PUBLICEVENT } from '../utils/queries';
import { formatDate } from '../utils/formatDate';

import pic1 from '../assets/create-event.jpg';
import pic2 from '../assets/discover.jpg';
import pic3 from '../assets/buy-ticket.png';
import pic4 from '../assets/connect.jpg';
import pic5 from '../assets/why-choose.jpg';

import { Footer } from '../components/Footer'

  const Events = () => {
    const { loading, data } = useQuery(QUERY_PUBLICEVENT)

    console.log(loading)
    const eventData = data?.publicEvents || []
    console.log("query", eventData)

    console.log(eventData)
    if (!eventData.length) {
      return <h3>No Events available</h3>;
    }

    
  return (
    <>
    <div name='Events' className='bg-[#ffffff] text-gray-300 w-full h-auto font-bold md:h-screen '>

        <div className='w-full p-2 grid align-middle  mt-30'>

          <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-[8%]'>
            {/* title */}
            <div class="m-5">
              <h1 class="text-5xl font-semibold text-black leading-tight">All Events</h1>
              <p class="mb-4 text-black text-medium font-normal text-left dark:text-neutral-50 mt-5">
                Check the popular events in your area. 
              </p>
            </div>

         
            {/* create your event */}
            {eventData.map((PublicEvent) => (
                  <>
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                      class="rounded-t-lg"
                      src={pic1}
                      alt="" />
                </a>

                <div class="p-6">
                      <h5
                        class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {PublicEvent.title}
                      </h5>
                      <p class="mb-4 text-black text-medium font-normal text-left dark:text-neutral-50">
                      {PublicEvent.description}
                      </p>
                      <p class="mb-4 text-black text-medium font-normal text-left dark:text-neutral-50">
                          {formatDate(PublicEvent.date)} | $ {PublicEvent.price}
                      </p>
                      <button
                          type="button"
                          class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                          data-te-ripple-init
                          data-te-ripple-color="light">
                          Purchase
                    </button>
                     
                </div>


            </div>
              </>
                ))} 

          </div>
        </div>
</div>
    
    </>
  );
};

export default Events;