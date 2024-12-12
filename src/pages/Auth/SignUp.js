import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/auth.css';
import InputField from '../../components/InputFeild';
import { signUp } from '../../services/sign-up';

const Signup = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // Fixed typo in state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); // Error state to hold the password match error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    } else {
      let res = await signUp(name, phoneNumber, email, password)
      console.log("res", res)
    }
    setError(""); // Reset error if passwords match
  };

  return (
    <div className="auth-container">
      <h1>SignUp to continue to Doc.AI</h1>
      <div className="auth-box">
        <h1 className='heading'>Welcome!</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          {/* Name Input */}
          <InputField
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ width: '20vw' }}
          />

          {/* Email Input */}
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '20vw' }}
          />

          {/* Phone Number Input */}
          <InputField
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={{ width: '20vw' }}
          />

          {/* Password Input */}
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '20vw' }}
          />

          {/* Confirm Password Input */}
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: '20vw' }}
          />

          {/* Display error message if passwords don't match */}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Have an account?{' '}
          <Link to="/" className="auth-link">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
