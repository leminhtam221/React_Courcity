import React from 'react';
import * as img from 'assets/images';

function CourseDetailIntro(props) {
  const { course } = props;
  const { enroll, price, discount } = course;
  const { name, avatar } = course.teacher_info;

  return (
    <div className="container">
      <div className="course-info-1x course-info-2x">
        <div className="row">
          <div className="col-md-4">
            <div className="course-info-left">
              <div className="media">
                <img src={avatar} alt="Image" />
                <div className="media-body">
                  <h3>{Object.keys(course).length && name}</h3>
                  <p>Visual Instructor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-info-middle">
              <p>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                &nbsp; 4.9 (66 ratings)
              </p>
              <h4>{enroll} Students Enrolled</h4>
            </div>
          </div>
          <div className="col-md-2">
            <div className="course-info-left">
              <div className="media">
                <div className="media-body">
                  <h4>Course Duration</h4>
                  <p>3 Weeks</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="course-info-right">
              <h3>
                <span>{discount}$</span>
              </h3>
              <a href="#" className="btn-small">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailIntro;
