import React, { useState, useEffect } from 'react';

import './App.css';


import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { userContext } from './reactContext';






import {
  BrowserRouter,
  Routes,
  Route,
  Navigate

} from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register';
import Home from './pages/Home'
import Header from './components/Header';


//import get user function...

import { getUser } from '../src/api/user'








function App() {




  const [user, setUser] = useState(null);



  useEffect(() => {

    const unsubscribe = getUser().then((res) => {
      if (res.error) toast(res.error);

      else {
        setUser(res.userName)
      }

    }).catch((err) => toast(err))


    return () => unsubscribe;

  }, []);







  return (
    <div>
      <BrowserRouter>
        <userContext.Provider value={{ user, setUser }}>
          <ToastContainer />
          <Header />
          <Routes>

            <Route path='/' element={user ? <Home /> : <Login />} />
            <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
            <Route path='/register' element={!user ? <Register /> : <Navigate to='/' />} />



          </Routes>
        </userContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
