import React from 'react';
import * as img from 'assets/images';

function Footer() {
  return (
    <footer className="footer-section-1x">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-top">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-top-right">
                    <img src={img.logo} alt="slide 1" />
                    <p>
                      All of our website templates are <br />
                      offered as is, we do not offer any <br /> guarantee or warranty.
                    </p>
                    <ul>
                      <li>+91 258 458 754</li>
                      <li>meditrust@info.com</li>
                    </ul>
                    <div className="footer-social-link">
                      <ul>
                        <li>
                          <a href="/#">
                            {' '}
                            <i className="fab fa-facebook-f" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            {' '}
                            <i className="fab fa-instagram" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            {' '}
                            <i className="fab fa-twitter" />{' '}
                          </a>
                        </li>
                        <li>
                          <a href="/#">
                            {' '}
                            <i className="fab fa-google-plus-g" />{' '}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="footer-top-left">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="single-link">
                          <h3>Company</h3>
                          <ul>
                            <li>
                              <a href="/#"> About Company </a>
                            </li>
                            <li>
                              <a href="/#"> Feature Course </a>
                            </li>
                            <li>
                              <a href="/#"> Careers </a>
                            </li>
                            <li>
                              <a href="/#"> Contact Us </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-link">
                          <h3>Help Links</h3>
                          <ul>
                            <li>
                              <a href="/#"> Student Support </a>
                            </li>
                            <li>
                              <a href="/#"> Course Policy </a>
                            </li>
                            <li>
                              <a href="/#"> Register Activation Key </a>
                            </li>
                            <li>
                              <a href="/#"> System Requirements </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="single-link">
                          <h3>Course</h3>
                          <ul>
                            <li>
                              <a href="/#"> Wordpress Development </a>
                            </li>
                            <li>
                              <a href="/#"> Design &amp; Photography </a>
                            </li>
                            <li>
                              <a href="/#"> Learning English </a>
                            </li>
                            <li>
                              <a href="/#"> Javascript Essential </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8 offset-md-4">
                        <div className="footer-subscriber">
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Your Email"
                              aria-label="Recipient's username"
                            />
                            <div className="input-group-append">
                              <button className="btn btn-subscriber" type="button">
                                {' '}
                                <i className="far fa-paper-plane" />{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <p>
                © <a href="/#">BanyanTheme</a> All Rights Reserved{' '}
              </p>
            </div>
            <div className="col-md-7">
              <ul>
                <li>
                  <a href="/#"> About Company </a>
                </li>
                <li>
                  <a href="/#"> Privacy Policy </a>
                </li>
                <li>
                  <a href="/#"> Help Center </a>
                </li>
                <li>
                  <a href="/#"> Terms </a>
                </li>
                <li>
                  <a href="/#"> Site Map </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
