import React from 'react';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Events from './pages/Events'
import MyEvents from './pages/MyEvents'
import Booking from './pages/Booking'

function App() {
  return (
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
  );
}

export default App;
