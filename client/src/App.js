import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Events from './pages/Events'
import MyEvents from './pages/MyEvents'
import Booking from './pages/Booking'
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/myevents' element={<MyEvents />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
