import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'; // Make sure to import your CSS file
import Login from './components/Login'; // Import your Login component
import Dashboard from './components/Dashboard'; // Import your Dashboard component
import Preferences from './components/Preferences'; // Import your Preferences component

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          {/* Set the default route to Login if not logged in */}
          {!loggedIn && <Route path='/' element={<Login setLoggedIn={setLoggedIn} />} />}
         
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/preferences' element={<Preferences />} />
          
          {/* Redirect to dashboard if logged in */}
          {loggedIn && <Route path='*' element={<Navigate to="/dashboard" />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
