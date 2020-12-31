import React from 'react';
import CourseDetailIntro from '../CourseDetailIntro';
import CourseDetailNav from '../CourseDetailNav';
import CourseFeature from '../CourseFeature';

function CourseDetailContainer(props) {
  const { course } = props;

  return (
    <div className="course-single-body">
      <CourseDetailIntro course={course} />

      <div className="container">
        <div className="course-details-1x">
          <div className="row">
            <div className="col-md-8">
              <div className="course-details-left">
                <CourseDetailNav />
              </div>
            </div>

            <div className="col-md-4">
              <CourseFeature />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailContainer;
