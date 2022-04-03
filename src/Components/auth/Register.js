import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';

export default function Register() {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmaill] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  
  return (
    <section className="container">
    <h1 className="large text-primary">Sign Up</h1>
    <p className="lead">
      <i className="fas fa-user" /> Create Your Account
    </p>
    <form className="form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Name"
          name="name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
        />
        <small className="form-text">
          This site uses Gravatar so if you want a profile image, use a
          Gravatar email
        </small>
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
        />
      </div>
      <input type="submit" className="btn btn-primary" value="Register" />
    </form>
    <p className="my-1">
      Already have an account? <Link to="/login">Sign In</Link>
    </p>
  </section>
  );
}
