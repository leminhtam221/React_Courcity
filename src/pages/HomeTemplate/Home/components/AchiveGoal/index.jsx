import React from 'react';
import * as img from 'assets/images';

function AchiveGoal(props) {
  return (
    <div className="achive-goals-1x">
      <div className="container">
        <div className="col-md-12">
          <div className="title-middle">
            <h2>Achieve Your Goals</h2>
            <p>
              Find subjects you're passionate about by browsing our online course
              categories. Start <br /> learning with top courses Built With Industry
              Experts
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-4">
              <div className="single-goals">
                <img src={img.icon1} alt="slide 1" />
                <h4>Develope Skill</h4>
                <p>
                  These goals will assist them in achieving their ultimate career position{' '}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-goals">
                <img src={img.icon2} alt="slide 1" />
                <h4>Learning Community</h4>
                <p>
                  These goals will assist them in achieving their ultimate career position{' '}
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-goals">
                <img src={img.icon4} alt="slide 1" />
                <h4>Real Life Project</h4>
                <p>
                  These goals will assist them in achieving their ultimate career position{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchiveGoal;
