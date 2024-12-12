import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './pages/home';
import SymptomChecker from './pages/symptom/symptom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/SignUp';

function App() {
  // Get the current location using the useLocation hook
  const location = useLocation();

  // Conditionally render the Navbar based on the current route
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signup';

  console.log('Base URL:', process.env.REACT_APP_BASE_URL);


  return (
    <div className='app-container'>
      {/* Only show Navbar if not on Login or Signup page */}
      {showNavbar && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    </div>
  );
}

export default App;
