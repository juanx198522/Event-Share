import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Events from './components/Events'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Events/>
      <Login/>

    </div>
  );
}

export default App;
