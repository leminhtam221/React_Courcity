import React from 'react';
import FormSignUp from '../FormSignUp';

function FormContainer(props) {
  const { onSubmit } = props;
  return (
    <div className="sign-in-1x">
      <div className="container">
        <div className="form-container">
          <div className="row">
            <div className="col-md-6">
              <div className="sign-in-form">
                <h3>Sign Up</h3>
                <FormSignUp onSubmit={onSubmit} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="sign-in-right sign-up-right">
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
