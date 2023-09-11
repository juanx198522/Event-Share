import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Events from './components/Events'
import Create from './components/Create'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Events/>
      <Login/>
      <Create/>

    </div>
  );
}

export default App;
