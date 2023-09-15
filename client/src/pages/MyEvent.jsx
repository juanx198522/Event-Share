import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

import MyEventForm from '../components/MyEvent/MyEventForm';
import MyEventList from '../components/MyEvent/MyEventList';
import { Navigate } from 'react-router-dom';
import Auth from '../utils/authClient';

import { QUERY_MYEVENT } from '../utils/queries';

const MyEvent = () => {


    const { loading, data } = useQuery(QUERY_MYEVENT);
    
    const myEvent = data?.myEvent || [];


    if (!Auth.loggedIn()) {    

        return <Navigate replace={true} to='/register'/>
    }


    return (
        <div name='home' className='w-full h-auto font-bold md:h-screen '>

        <div className='w-full p-2 grid align-middle'>
          
          <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4 mt-[6%]'>

            {/* left side*/}
            <div>
                    <MyEventForm />
            </div>

            {/* right side */}
            <div>
                {loading ? (<div>Loading...</div>) : (<MyEventList myEvent={myEvent} /> )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default MyEvent;
