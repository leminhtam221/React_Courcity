import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function FormSignUp(props) {
  const { onSubmit } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errMessage, setErrMessage] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_account: username,
      email,
      name: fullName,
      password,
      phone_num: phoneNumber,
      type: 2,
      avatar: '',
    };
    if (validation(username, password, passwordConfirm, email, phoneNumber, fullName)) {
      onSubmit(formData);
    }
  };

  const validation = (
    user_account,
    password,
    passwordConfirm,
    email,
    phoneNumber,
    fullName
  ) => {
    let isErr = true;
    let err = {};

    if (!user_account) {
      err.username = 'username is required';
      isErr = false;
    }

    if (!password) {
      err.password = 'password is required';
      isErr = false;
    } else {
      if (password.length < 8) {
        err.password = 'Mật khẩu phải từ 8 ký tự trở lên';
        isErr = false;
      } else {
        if (
          password.search(/\d/) == -1 ||
          password.search(/[A-Z]/) < 0 ||
          password.search(/[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g) <
            0
        ) {
          isErr = false;
          err.password = 'Mật khẩu phải bao gồm chữ hoa, ký tự đặc biết và số';
        }
      }
    }

    if (!passwordConfirm) {
      err.passwordConfirm = 'passwordConfirm is required';
      isErr = false;
    } else if (passwordConfirm !== password) {
      err.passwordConfirm = 'password must be the same';
      isErr = false;
    }

    if (!email) {
      err.email = 'email is required';
      isErr = false;
    } else {
      var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.match(mailformat)) {
        isErr = false;
        err.email = 'email not invalid';
      }
    }

    if (!phoneNumber) {
      err.phoneNumber = 'phone number is required';
      isErr = false;
    }

    if (!fullName) {
      err.fullName = 'fullname is required';
      isErr = false;
    }

    if (!isErr) {
      setErrMessage(err);
    } else {
      setErrMessage({});
    }

    return isErr;
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    switch (name) {
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'fullName':
        setFullName(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'passwordConfirm':
        setPasswordConfirm(value);
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="single-input">
            <i className="fas fa-envelope" />
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${errMessage.username ? 'mb-0' : ''}`}
                placeholder="Username"
                aria-label="Name"
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
        <div className="col-md-6">
          <div className="single-input">
            <i className="fas fa-envelope" />
            <div className="form-group">
              <input
                type="email"
                className={`form-control ${errMessage.email ? 'mb-0' : ''}`}
                placeholder="E-mail"
                name="email"
                aria-label="Name"
                value={email}
                onChange={handleInputChange}
              />
              {errMessage.email && <div className="text-danger">{errMessage.email}</div>}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-input">
            <i className="far fa-user" />
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${errMessage.fullName ? 'mb-0' : ''}`}
                placeholder="Full Name"
                name="fullName"
                aria-label="Name"
                value={fullName}
                onChange={handleInputChange}
              />
              {errMessage.fullName && (
                <div className="text-danger">{errMessage.fullName}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-input">
            <i className="far fa-user" />
            <div className="form-group">
              <input
                type="text"
                className={`form-control ${errMessage.phoneNumber ? 'mb-0' : ''}`}
                placeholder="Phone Number"
                aria-label="Name"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleInputChange}
              />
              {errMessage.phoneNumber && (
                <div className="text-danger">{errMessage.phoneNumber}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="single-input">
            <i className="fas fa-key" />
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${errMessage.password ? 'mb-0' : ''}`}
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
        <div className="col-md-6">
          <div className="single-input">
            <i className="fas fa-key" />
            <div className="form-group">
              <input
                type="password"
                className={`form-control ${errMessage.passwordConfirm ? 'mb-0' : ''}`}
                placeholder="Confirm Password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={handleInputChange}
              />
              {errMessage.passwordConfirm && (
                <div className="text-danger">{errMessage.passwordConfirm}</div>
              )}
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="sign-in-btn sign-up-btn">
            <p>Or Signup with</p>
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
            <button type="submit" className="btn-small">
              {' '}
              Sign Up{' '}
            </button>
            <h4>
              Already have an account? <Link to="sign-in"> Sign In here!</Link>
            </h4>
          </div>
        </div>
      </div>
    </form>
  );
}

export default FormSignUp;
