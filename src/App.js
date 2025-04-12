import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './pages/home';
import SymptomChecker from './pages/symptom/symptom';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/SignUp';

function App() {
  // Get the current location using the useLocation hook
  const location = useLocation();
  const navigate = useNavigate();

  // Conditionally render the Navbar based on the current route
  const showNavbar = location.pathname !== '/' && location.pathname !== '/signup';

  // useEffect(() => {
  //   // Check if the page has been refreshed by using sessionStorage
  //   const isPageRefreshed = sessionStorage.getItem('pageRefreshed');

  //   if (!isPageRefreshed) {
  //     // Mark the page as refreshed
  //     sessionStorage.setItem('pageRefreshed', 'true');

  //     // Redirect to /home if on / or /symptom-checker
  //     if (location.pathname === '/' || location.pathname === '/symptom-checker') {
  //       navigate('/home', { replace: true });
  //     }
  //   } else {
  //     // If the page is not freshly loaded, clear the session storage to allow normal navigation
  //     sessionStorage.removeItem('pageRefreshed');
  //   }
  // }, [location.pathname, navigate]);



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
