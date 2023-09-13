import React from 'react';




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
