import React from 'react';
import { useQuery } from '@apollo/client';

import MyEventForm from '../components/MyEvent/MyEventForm';
import MyEventList from '../components/MyEvent/MyEventList';

import { QUERY_MYEVENT } from '../utils/queries';

const MyEvent = () => {
    const { loading, data } = useQuery(QUERY_MYEVENT);
    const myEvent = data?.myEvent || [];

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
