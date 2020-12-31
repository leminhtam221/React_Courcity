import React from 'react';
import PropTypes from 'prop-types';
import * as img from 'assets/images';

Testimonial.propTypes = {};

function Testimonial(props) {
  return (
    <div className="tesimonial-1x">
      <div className="container">
        <div className="col-md-10 offset-md-1">
          <div className="testimonial">
            <div className="single-testimonial text-center">
              <img src={img.banner1} alt="slide 1" />
              <p>
                <i className="fas fa-quote-left" /> Before Coursecity, I was working two
                minimum wage jobs. Now, I have a new job, a new mindset,
                <br /> and new life!"I learned most of my programming skills and database
                management skills <br /> through self-study and the material available on
                Coursecity.
              </p>
              <h3>Stephanie Magion</h3>
              <h4>Manager at Doltef</h4>
            </div>
            <div className="single-testimonial text-center">
              <img src={img.banner1} alt="slide 1" />
              <p>
                <i className="fas fa-quote-left" /> Before Coursecity, I was working two
                minimum wage jobs. Now, I have a new job, a new mindset,
                <br /> and new life!"I learned most of my programming skills and database
                management skills <br /> through self-study and the material available on
                Coursecity.
              </p>
              <h3>Jhon Alex</h3>
              <h4>Chairman at Doltef</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
