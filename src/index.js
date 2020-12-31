import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'assets/css/bootstrap.min.css';
import 'assets/fonts/css/fontawesome-all.min.css';
import 'assets/css/animate.css';
import 'assets/css/bootstrap-4-navbar.css';
import 'assets/slick/slick.css';
import 'assets/inc/lightbox/css/jquery.fancybox.css';
import 'assets/css/fakeLoader.css';
import 'assets/css/magnific-popup.css';
import 'assets/style.css';
import 'assets/color/color-switcher.css';
import 'assets/css/responsive.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
