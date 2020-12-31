import React from 'react';
import CourseItem from '../CourseItem';

function Course(props) {
  const { courseList, handleDeleteCourse, handleEditCourse } = props;

  const renderCourseList = (couseList) => {
    return couseList.map((course) => (
      <CourseItem
        key={course.id}
        course={course}
        handleDeleteCourse={handleDeleteCourse}
        handleEditCourse={handleEditCourse}
      />
    ));
  };

  return (
    <div className="course-1x pt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-middle">
              <h2>Coursecity Top Courses</h2>
            </div>
          </div>

          <div className="col-md-12">
            <div className="all-course">
              <div className="row">
                {courseList.length && renderCourseList(courseList)}

                <div className="col-md-12 text-center">
                  <a href="/#" className="btn-small">
                    {' '}
                    View more{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
