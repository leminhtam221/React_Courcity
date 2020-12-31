import React from 'react';
import PropTypes from 'prop-types';

LearningPath.propTypes = {};

function LearningPath(props) {
  return (
    <div className="learning-path-1x">
      <div className="container">
        <div className="col-md-12">
          <div className="title-middle">
            <h2>Get Ahead With Learning Paths</h2>
          </div>
        </div>
        <div className="col-md-12">
          <div className="learning-path">
            <div className="single-learning-path">
              <div className="hvrbox">
                <a href="#">
                  <img
                    src="assets/images/1.jpg"
                    alt="slide 1"
                    className="hvrbox-layer_bottom"
                  />
                </a>
                <div className="hvrbox-layer_top hvrbox-text blue">
                  <div className="hvrbox-text">
                    <a href="#">Become a Designer</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-learning-path">
              <div className="hvrbox">
                <a href="#">
                  <img
                    src="assets/images/2.jpg"
                    alt="slide 1"
                    className="hvrbox-layer_bottom"
                  />
                </a>
                <div className="hvrbox-layer_top hvrbox-text green">
                  <div className="hvrbox-text">
                    <a href="#">Become a Developer</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-learning-path">
              <div className="hvrbox">
                <a href="#">
                  <img
                    src="assets/images/3.jpg"
                    alt="slide 1"
                    className="hvrbox-layer_bottom"
                  />
                </a>
                <div className="hvrbox-layer_top hvrbox-text red">
                  <div className="hvrbox-text">
                    <a href="#">Become a Manager</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-learning-path">
              <div className="hvrbox">
                <a href="#">
                  <img
                    src="assets/images/4.jpg"
                    alt="slide 1"
                    className="hvrbox-layer_bottom"
                  />
                </a>
                <div className="hvrbox-layer_top hvrbox-text yellow">
                  <div className="hvrbox-text">
                    <a href="#">Become a Marketer</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-learning-path">
              <div className="hvrbox">
                <a href="#">
                  <img
                    src="assets/images/5.jpg"
                    alt="slide 1"
                    className="hvrbox-layer_bottom"
                  />
                </a>
                <div className="hvrbox-layer_top hvrbox-text">
                  <div className="hvrbox-text">
                    <a href="#">Design Introduction</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPath;
