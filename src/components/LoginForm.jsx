import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [full_name, setName] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    if (full_name) {
      fetch('http://127.0.0.1:3000/api/v1/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ full_name, email, password }),
      })
        .then((response) => {
          if (!response.ok) {
            const error = new Error(response.status);
            throw error;
          } else {
            return response.json();
          }
        })
        .then((data) => {
          navigate('/books');
        })
        .catch((error) => {
          throw new Error(error);
        });
    }
  };

  return (
    <div className="container session-container">

      <form onSubmit={handleSubmit} className="mt-5 card p-5 my-card">
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
            type="text"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <div className="mt-4 btn-session">
          <button type="submit" className="session-btn">
            Login
          </button>
        </div>
      </form>
      <div className="form-group-session mt-2">
          <p>Don&apos;t have an account?</p>
          <Link to="/register">Register</Link>
        </div>
    </div>
  );
};

export default LoginForm;