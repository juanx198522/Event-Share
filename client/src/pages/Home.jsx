import React from 'react';

import pic1 from '../assets/create-event.jpg';
import pic2 from '../assets/discover.jpg';
import pic3 from '../assets/buy-ticket.png';
import pic4 from '../assets/connect.jpg';
import pic5 from '../assets/why-choose.jpg';

import Footer  from '../components/Footer'; 


export default function Home() {
    return (
      <>
      <div name='home' className='bg-[#ffffff] text-gray-300 w-full h-auto font-bold md:h-screen '>
        <div className='w-full p-2 grid align-middle'>
          
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[8%]'>
            {/* title */}
            <div class="m-5">
              <h1 class="text-8xl font-semibold  text-[#001e3b] tracking-tight md:text-base">Welcome to Event Share!</h1>
              <h2 class="text-4xl font-medium  text-black leading-tight my-10">One Goal. One Passion.<br />Event Booking Made Easy.</h2>
            </div>

            {/* create your event */}
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
                        Create Your Event
                      </h5>
                      <p class="mb-4 text-black text-sm font-normal text-left dark:text-neutral-50">
                          Are you an event organizer, artist, or performer? Showcase your talents and create your own event listings effortlessly.Our user-friendly platform allows you to craft captivating event pages, set ticket prices, and reach a broad audience.
                      </p>
                </div>
            </div>
            {/* discover amazing event */}
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                      class="rounded-t-lg"
                      src={pic2}
                      alt="" />
                </a>
                <div class="p-6">
                      <h5
                        class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Discover Amazing Events
                      </h5>
                      <p class="mb-4 text-black text-sm font-normal text-left dark:text-neutral-50">
                      Explore a diverse range of events happening near you or in your favorite cities. From music concerts and art exhibitions to sports tournaments and food festivals, we have it all. Our intuitive search and filter options make finding the perfect event a breeze.
                      </p>
                </div>
            </div>
            {/* Buy Tickets with Ease */}
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                      class="rounded-t-lg"
                      src={pic3}
                      alt="" />
                </a>
                <div class="p-6">
                      <h5
                        class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Buy Tickets With Ease
                      </h5>
                      <p class="mb-4 text-black text-sm font-normal text-left dark:text-neutral-50">
                      Secure your spot at your preferred events hassle-free. Purchase single or multiple tickets for you and your friends with a few simple clicks. Our secure payment system ensures your transactions are safe and smooth.
                      </p>
                </div>
            </div>
            {/* Connect with the Community */}
            <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                      class="rounded-t-lg"
                      src={pic4}
                      alt="" />
                </a>
                <div class="p-6">
                      <h5
                        class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Connect with the Community
                      </h5>
                      <p class="mb-4 text-black text-sm font-normal text-left dark:text-neutral-50">
                      Join a vibrant community of event enthusiasts. Share your experiences, reviews, and photos with fellow attendees. Connect with event organizers and artists to build lasting connections.
                      </p>
                </div>
            </div>
             {/* Connect with the Community */}
             <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <a href="#!">
                    <img
                      class="rounded-t-lg"
                      src={pic5}
                      alt="" />
                </a>
                <div class="p-6">
                      <h5
                        class="mb-2 text-3xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        Why Choose Us?
                      </h5>
                      <p class="mb-4 text-black text-sm font-normal text-left dark:text-neutral-50">
                      Unmatched Variety: We curate a diverse selection of events to cater to all tastes and preferences. Whether you're a music aficionado, a sports fanatic, or a foodie, there's something here for you.
                      </p>
                </div>
            </div>
          </div>
        </div>
     
      </div>
      
      </>
    );
  };












{/* 

const Home = () => {
  return (
    <div name='home' className='bg-[#2f3235] text-gray-300 w-full h-auto font-bold md:h-screen '>
      <div className='w-full p-2 grid align-middle'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-[8%]'>
          <div>
            <h1 className='text-4xl  text-white'>
              Welcome to Event Share!
            </h1>
          </div>
          <div className=' bg-gray-500 group container rounded-md flex justify-center items-center mx-auto'>
            <div className='p-4'>
              <p className='text-2xl  text-white tracking-wider'>
                Create Your Event
              </p>
              <div className='pt-8 '>
                <p>
                  Are you an event organizer, artist, or performer? Showcase
                  your talents and create your own event listings effortlessly.
                  Our user-friendly platform allows you to craft captivating
                  event pages, set ticket prices, and reach a broad audience.
                </p>
              </div>
            </div>
          </div>
          <div className=' bg-gray-500 group container rounded-md flex justify-center items-center mx-auto'>
            <div className='p-4'>
              <p className='text-2xl  text-white tracking-wider'>
                Discover Amazing Events
              </p>
              <div className='pt-8 '>
                <p>
                  Explore a diverse range of events happening near you or in
                  your favorite cities. From music concerts and art exhibitions
                  to sports tournaments and food festivals, we have it all. Our
                  intuitive search and filter options make finding the perfect
                  event a breeze.
                </p>
              </div>
            </div>
          </div>
          <div className=' bg-gray-500 group container rounded-md flex justify-center items-center mx-auto'>
            <div className='p-4'>
              <p className='text-2xl  text-white tracking-wider'>
                Buy Tickets with Ease
              </p>
              <div className='pt-8 '>
                <p>
                  Secure your spot at your preferred events hassle-free.
                  Purchase single or multiple tickets for you and your friends
                  with a few simple clicks. Our secure payment system ensures
                  your transactions are safe and smooth.
                </p>
              </div>
            </div>
          </div>

          <div className=' bg-gray-500 group container rounded-md flex justify-center items-center mx-auto'>
            <div className='p-4'>
              <p className='text-2xl  text-white tracking-wider'>
                Connect with the Community
              </p>
              <div className='pt-8 '>
                <p>
                  Join a vibrant community of event enthusiasts. Share your
                  experiences, reviews, and photos with fellow attendees.
                  Connect with event organizers and artists to build lasting
                  connections.
                </p>
              </div>
            </div>
          </div>
          <div className=' bg-gray-500 group container rounded-md flex justify-center items-center mx-auto'>
            <div className='p-4'>
              <p className='text-2xl  text-white tracking-wider'>
                Why Choose Us?
              </p>
              <div className='pt-8 '>
                <p>
                  Unmatched Variety: We curate a diverse selection of events to
                  cater to all tastes and preferences. Whether you're a music
                  aficionado, a sports fanatic, or a foodie, there's something
                  here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  );
};

export default Home;

*/}
