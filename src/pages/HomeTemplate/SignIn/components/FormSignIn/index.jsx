import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function FormSignIn(props) {
  const { onSubmit } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState({});

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const formData = {
      user_account: username,
      password,
    };

    if (validation(username, password)) {
      onSubmit(formData);
    }
  };

  const validation = (user_account, password) => {
    let isErr = true;
    let err = {};

    if (!user_account) {
      err.username = 'username is required';
      isErr = false;
    }

    if (!password) {
      err.password = 'password is required';
      isErr = false;
    }

    if (!isErr) {
      setErrMessage(err);
    } else {
      setErrMessage({});
    }

    return isErr;
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="col-md-12">
          <div className="single-input">
            <i className="fas fa-envelope" />
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${errMessage.username ? 'mb-0' : ''}`}
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleInputChange}
              />

              {errMessage.username && (
                <div className="text-danger">{errMessage.username}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="single-input">
            <i className="fas fa-key" />
            <div className="form-group">
              <input
                type="password"
                className="form-control mb-0"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              {errMessage.password && (
                <div className="text-danger">{errMessage.password}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sign-in-btn">
            <span>
              <a href="#">Forget Password?</a>
            </span>
            <button type="submti" className="btn-small">
              {' '}
              Sign In{' '}
            </button>
            <p>Or login with</p>
            <ul>
              <li>
                <a> Facebook </a>
              </li>
              <li>
                <a> Linkedin </a>
              </li>
              <li>
                <a> Google </a>
              </li>
            </ul>
            <h4>
              Don’t have an account? <Link to="sign-up"> Create one here!</Link>
            </h4>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormSignIn;
