import React from 'react';
import FormSignIn from '../FormSignIn';

function FormContainer(props) {
  const { onSubmit } = props;
  return (
    <div className="sign-in-1x">
      <div className="container">
        <div className="form-container">
          <div className="row">
            <div className="col-md-4">
              <div className="sign-in-form">
                <h3>Sign In</h3>
                <FormSignIn onSubmit={onSubmit} />
              </div>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="sign-in-right">
                <a
                  href="https://www.youtube.com/watch?v=gwinFP8_qIM"
                  className="btn-circle video"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
