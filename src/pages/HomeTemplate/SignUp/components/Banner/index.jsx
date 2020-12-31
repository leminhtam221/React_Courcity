import React from 'react';
import * as img from 'assets/images';

function Banner(props) {
  return (
    <div className="page-banner">
      <div className="hvrbox">
        <img src={img.videoBg} alt="Mountains" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top">
          <div className="container">
            <div className="overlay-text text-left">
              <h3>Sign In</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sign Up
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
