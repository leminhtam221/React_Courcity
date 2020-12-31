import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import * as img from 'assets/images';
import $ from 'jquery';

function Header() {
  useEffect(() => {
    $('body').show();
  }, []);

  return (
    <div className="main-menu-1x">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="main-menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light btco-hover-menu">
                <Link className="navbar-brand" to="/">
                  <img src={img.logo} className="d-inline-block align-top" alt="logo" />
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <HeaderMenu />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
