import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Events from './pages/Events'
import MyEvent from './pages/MyEvent'
import Booking from './pages/Booking'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
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
            <Route path='/myevent' element={<MyEvent />} />
            <Route path='/booking' element={<Booking />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default App;