import React, {useState, useEffect} from 'react';
import {Home, home} from './pages';
import {Routes, Route} from 'react-router-dom';

const App =() => {
  return (
    <Routes>
    <Route exact path="/" element={<Home/>}/>
  </Routes>
  )
  }

export default App;
