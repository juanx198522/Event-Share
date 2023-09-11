import React from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Events from './components/Events'
import Create from './components/Create'
import Cart from './components/Cart'

function App() {
  return (
    <div className='justify-space'>
      <Navbar/>
      <Home/>
      <Events/>
      <Login/>
      <Create/>
      <Cart/>

    </div>
  );
}

export default App;
