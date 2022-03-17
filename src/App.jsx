import React, { useState } from 'react';

import './App.css';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { userContext } from './reactContext';






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

  const [user, setUser] = useState(null)


  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={{ user, setUser }}>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={user ? <Home /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />



          </Routes>
        </userContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
