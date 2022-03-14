import React from 'react';

import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home'
import Header from './components/Header';











function App() {




  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />



        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
