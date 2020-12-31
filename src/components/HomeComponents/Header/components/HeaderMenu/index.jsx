import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ChildMenu from '../ChildMenu';

function HeaderMenu() {
  const location = useLocation();
  const { pathname } = location;
  let isUserLogin = [];
  if (JSON.parse(localStorage.getItem('login'))) {
    isUserLogin = JSON.parse(localStorage.getItem('login'));
  }

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto main-menu-nav">
        <li className={`nav-item dropdown ${pathname == '/' ? 'active' : ''}`}>
          <Link className="nav-link" to="/" id="navbarDropdownMenuLink1">
            Home <span className="sr-only">(current)</span>
          </Link>
        </li>
        <li className={`nav-item ${pathname == '/courses' ? 'active' : ''}`}>
          <Link className="nav-link" to="/courses">
            Courses
          </Link>
          <ChildMenu />
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link"
            href="blog.html"
            id="navbarDropdownMenuLink4"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Blog
          </a>
          <ChildMenu />
        </li>
        <li className="nav-item">
          <a className="nav-link" href="contact-us.html">
            Contact Us
          </a>
        </li>
        {isUserLogin.length > 0 && isUserLogin[0].type === 1 && (
          <li className="nav-item">
            <Link className="nav-link" to="management">
              Quản lý khóa học
            </Link>
          </li>
        )}
        <li className="nav-item sign-in">
          {isUserLogin.length <= 0 && (
            <Link className="nav-link" to="sign-in">
              Sign in
            </Link>
          )}

          {isUserLogin.length > 0 && (
            <div className="dropdown show">
              <a
                className="btn btn-secondary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {isUserLogin[0].name}
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#" onClick={handleLogOut}>
                  Logout
                </a>
              </div>
            </div>
          )}
        </li>
        <li className="nav-item">
          <Link className="btn-small" to="/card">
            Card
          </Link>
        </li>
      </ul>
    </div>
  );
}

const handleLogOut = () => {
  localStorage.removeItem('login');
};

export default HeaderMenu;
