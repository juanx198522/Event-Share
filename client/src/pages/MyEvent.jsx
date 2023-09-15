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
        <div>
            <div>
                <MyEventForm />
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <MyEventList
                        myEvent={myEvent}
                    />
                )}
            </div>
        </div>
    );
}

export default MyEvent;
