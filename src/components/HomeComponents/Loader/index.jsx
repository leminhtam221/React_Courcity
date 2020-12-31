import React from 'react';
import './style.css';

function Loader(props) {
  return (
    <div id="fakeloader" className="loader">
      <div className="fl spinner1">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
}

export default Loader;
