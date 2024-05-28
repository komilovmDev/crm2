import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoPng from '../../Assets/logo.svg';
import './Login.css'; // Make sure to create a corresponding CSS file
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineRemoveRedEye, MdOutlineVisibilityOff } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa'; // Changed import from "react-icons/fa6" to "react-icons/fa"

function Login({ setToken, token }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevents the form from submitting traditionally
    setToken('ksdkfhk2839uyidjsfbhsdufg28'); // Example token, you should replace it with your token generation logic
  };
  const [passwordShown, setPasswordShown] = useState(false); // State to toggle password visibility

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown); // Toggle the state
  };

  return (
    <div className="LoginContainer">
      <div className="login-container">
        <div className="login-logo">
          <img src={logoPng} alt="Success Academy" /> {/* Replace with your logo path */}
        </div>
        <div className="login-form">
          <h1>Welcome!</h1>
          {/* <form> */}
          <form action="">
            <div className="Login">
              <p>Login</p>
              <label className="input-group1">
                <input type="text" placeholder="Input Login" />
                <FaRegUserCircle />
              </label>
            </div>
            <div className="Password">
              <div>
                <p>Password </p>
                <a href="/">Forgot Password?</a> {/* Changed href from "*" to "/" */}
              </div>
              <label className="input-group1">
                <input
                  type={passwordShown ? 'text' : 'password'}
                  placeholder="Input Password"
                />
                {passwordShown ? (
                  <MdOutlineVisibilityOff
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </label>
            </div>
            <button type="button" className="btn-sign-in" onClick={handleSignIn}>
              Confirm  
            </button>
            <div className="signup-link">
              <a href="#signup">
                Sign up<FaChevronRight />
              </a>
            </div>
          </form>
        </div>
      </div>
      <label htmlFor=""></label> 
    </div>
  );
}

export default Login;
