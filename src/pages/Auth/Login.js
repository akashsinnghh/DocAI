import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';
import InputField from '../../components/InputFeild';
import { signIn } from '../../services/sign-in';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Logging in with', { email, password });
    try {
      // Wait for the signIn function to resolve
      const response = await signIn(email, password);
      console.log(response); // This will now log the actual response
  
      if (response && response?.message) {
        alert(response.message);
      } else {
        // Redirect to dashboard after successful login
        navigate('/home');
      }

    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div className="auth-container">
         <h1>Login to continue to Doc.AI</h1>
      <div className="auth-box">
        <h1 className='heading'>Welcome Back!</h1>
       
        <form onSubmit={handleSubmit} className="auth-form">
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{width: '18vw'}}
            required
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{width: '18vw'}}
          />
          <button type="submit" className="auth-button">
            Login
          </button>
        </form>
        <p className="auth-footer">
          Don’t have an account?{' '}
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
