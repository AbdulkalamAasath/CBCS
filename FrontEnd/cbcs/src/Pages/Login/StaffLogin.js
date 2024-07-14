import React, { useState } from 'react';
import { useStaffLogin } from '../../Hooks/useStaffLogin';
import logo from './back.jpg';
import head from '../../css/head.jpg';
import './StudentLogin.css'; // Import your CSS file for this component

const StudentLogin = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useStaffLogin('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(Email, password);
  };

  return (
    <div className="container">
      <div className="left-side">
        <img src={head} alt="Header" className="header-image" />
      </div>
      <div className="right-side">
        <div className="form-container">
          <div className="form-header">
            <img src={logo} alt="Logo" className="logo-image" />
            <p className="form-title"><b>Enter your Details.</b></p>
          </div>
          <form id="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="text"
                placeholder="Email"
                className="form-control"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="error"></div>
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                id="Password"
                type="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="error"></div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading}
            >
              {isLoading ? 'Logging in...' : 'Log In'}
            </button>
          </form>
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
