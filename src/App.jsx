import React from 'react';

import { Routes, Route } from 'react-router-dom'
import Login from './components/login';
import Home from './components/Home';
import Auth from './components/auth';

const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route element={<Auth/>} >
        <Route path='/home' element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
