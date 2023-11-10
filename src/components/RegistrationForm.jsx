import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  const [full_name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (full_name) {
        // http://127.0.0.1:3000
      fetch('http://127.0.0.1:3000/api/v1/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, password }),
      })
        .then((response) => {
          if (response.ok) {
            window.location.pathname = '/';
          } else {
            throw new Error(response.status);
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };
  return (
    <div className="container session-container">
      <form onSubmit={handleSubmit} className="mt-5 card p-5 my-card">
        <div className="logo-container">
        </div>
        <div className="form-group-session">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            placeholder="Enter your name"
            value={full_name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group-session">
          <input
            type="text"
            id="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
          />
        </div>
        <div className="form-group-session">
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="form-group-session mt-4">
          <button type="submit" className="session-btn">Register</button>
        </div>
        <div className="form-group-session mt-2 my-link">
          <p>Have an account?</p>
          <Link to="/">Log In</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;