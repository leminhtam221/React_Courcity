import React from 'react';
import * as img from 'assets/images';

function Banner(props) {
  const { course } = props;
  const { course_name } = course;

  return (
    <div className="page-banner">
      <div className="hvrbox">
        <img src={img.videoBg} alt="Mountains" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top">
          <div className="container">
            <div className="overlay-text text-left">
              <h3>{Object.keys(course).length && course_name}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item active" aria-current="page">
                    {Object.keys(course).length && course_name}
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
