import React from "react";

const Home = () => {
  return (
    <div
      name="projects"
      className="bg-[#2f3235] text-gray-300 w-full md:h-screen"
    >
      <div className="w-screen p-4 flex flex-col justify-center h-screen bg-blue-500 ">
        <div>
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Event Share!</h1>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto hover:scale-100">
            
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Create Your Event
              </span>
              <div className="pt-8 text-center">
                <p>
                  Are you an event organizer, artist, or performer? Showcase
                  your talents and create your own event listings effortlessly.
                  Our user-friendly platform allows you to craft captivating
                  event pages, set ticket prices, and reach a broad audience.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto">
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Discover Amazing Events
              </span>
              <div className="pt-8 text-center">
                <p>
                  Explore a diverse range of events happening near you or in
                  your favorite cities. From music concerts and art exhibitions
                  to sports tournaments and food festivals, we have it all. Our
                  intuitive search and filter options make finding the perfect
                  event a breeze.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto">
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Buy Tickets with Ease
              </span>
              <div className="pt-8 text-center">
                <p>
                  Secure your spot at your preferred events hassle-free.
                  Purchase single or multiple tickets for you and your friends
                  with a few simple clicks. Our secure payment system ensures
                  your transactions are safe and smooth.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto">
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Stay Informed
              </span>
              <div className="pt-8 text-center">
                <p>
                  Stay updated with event details, schedules, and important
                  announcements. Receive email notifications, reminders, and
                  personalized recommendations based on your interests.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto">
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
                Connect with the Community
              </span>
              <div className="pt-8 text-center">
                <p>
                  Join a vibrant community of event enthusiasts. Share your
                  experiences, reviews, and photos with fellow attendees.
                  Connect with event organizers and artists to build lasting
                  connections.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className=" bg-gray-500 group container rounded-md flex justify-center items-center mx-auto">
            <div className="p-4">
              <span className="text-2xl font-bold text-white tracking-wider">
              Why Choose Us?
              </span>
              <div className="pt-8 text-center">
                <p>
                Unmatched Variety: We curate a diverse selection of events to cater to all tastes and preferences. Whether you're a music aficionado, a sports fanatic, or a foodie, there's something here for you.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
