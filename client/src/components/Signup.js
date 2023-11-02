import React, { useState } from 'react';
import '../styles/Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate()


  const [signupFormData, setSignupFormData] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(signupFormData.password)) {
      alert(
        'Password must include at least one uppercase letter, one lowercase letter, one special character, and be at least six characters long.'
      );
      return;
    }

    if (signupFormData.password !== signupFormData.confirmPassword) {
      alert('Password and confirmation do not match.');
      return;
    }

    try {
      //  API request for signup
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
      });

      if (response.ok) {
        const data = await response.json();
        setSignupFormData({
          name: '',
          username: '',
          password: '',
          confirmPassword: '',
        });
        alert('Signup successful: ' + data.username);
      } else {
        alert('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup: ' + error.message);
    }
  };

  const handleLogin = async () => {
    try {
      // API request for login
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        const data = await response.json();
        setLoginFormData({ username: '', password: '' });
        alert('Login successful: ' + data.message);
        navigate('/blogs')
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Error during login: ' + error.message);
    }
  };
  
  const handleLogout = () => {
    // Log the user out
    setIsLoggedIn(false);
  };

  const showLoginSection = () => {
    setShowLogin(true); // Show the login section
  };

  const showSignupSection = () => {
    setShowLogin(false); // Show the signup section
  };

  return (
    <div className="login-container">
      <h1> Account</h1>
      {isLoggedIn ? (
        <div className="form">
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>

      ):!showLogin ? (
        <div className="form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={signupFormData.name}
            onChange={(e) =>
              setSignupFormData({ ...signupFormData, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Username"
            value={signupFormData.username}
            onChange={(e) =>
              setSignupFormData({ ...signupFormData, username: e.target.value })
            }
          />
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={signupFormData.password}
              onChange={(e) =>
                setSignupFormData({ ...signupFormData, password: e.target.value })
              }
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '16px' }} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: '16px' }} />
              )}
            </span>
          </div>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={signupFormData.confirmPassword}
              onChange={(e) =>
                setSignupFormData({
                  ...signupFormData,
                  confirmPassword: e.target.value,
                })
              }
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '16px' }} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: '16px' }} />
              )}
            </span>
          </div>
          <button onClick={handleSignup}>Sign Up</button>
          <p>
            Already have an account?{' '}
            <a href="#" onClick={showLoginSection}>
              Login
            </a>
          </p>
        </div>
      ) : (
        <div className="form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={loginFormData.username}
            onChange={(e) =>
              setLoginFormData({ ...loginFormData, username: e.target.value })
            }
          />
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={loginFormData.password}
              onChange={(e) =>
                setLoginFormData({ ...loginFormData, password: e.target.value })
              }
            />
            <span onClick={togglePasswordVisibility}>
              {showPassword ? (
                <FontAwesomeIcon icon={faEye} style={{ fontSize: '16px' }} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} style={{ fontSize: '16px' }} />
              )}
            </span>
          </div>
                <button onClick={handleLogin}>Login</button>          
          <p>
            Do not have an account?{' '}
            <a href="#" onClick={showSignupSection}>
              Sign Up
            </a>
          </p>
        </div>
      )}
      <div>

    </div>
    </div>
  );
}

export default Signup;