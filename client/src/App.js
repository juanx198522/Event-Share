import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, } from '@apollo/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Events from './pages/Events'
import MyEvents from './pages/MyEvents'
import Booking from './pages/Booking'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/events' element={<Events />} />
            <Route path='/myevents' element={<MyEvents />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;
