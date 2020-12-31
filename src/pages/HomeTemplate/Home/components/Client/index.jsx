import React from 'react';
import * as img from 'assets/images';

function Client(props) {
  return (
    <div className="client-1x">
      <div className="container">
        <div className="col-md-12">
          <div className="title-middle">
            <h2>Train Your Company Member</h2>
            <p>
              Find subjects you're passionate about by browsing our online course
              categories. Start <br /> learning with top courses Built With Industry
              Experts
            </p>
          </div>
        </div>
        <div className="col-md-8 offset-md-2">
          <div className="row">
            <div className="col-md-3">
              <div className="single-client">
                <a href="#">
                  <img src={img.png1} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-client">
                <a href="#">
                  <img src={img.png2} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-client">
                <a href="#">
                  <img src={img.png5} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="single-client">
                <a href="#">
                  <img src={img.png4} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-client">
                <a href="#">
                  <img src={img.png4} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-client">
                <a href="#">
                  <img src={img.png1} alt="slide 1" />
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-client">
                <a href="#">
                  <img src={img.png2} alt="slide 1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
