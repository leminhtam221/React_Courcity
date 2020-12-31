import React from 'react';
import CourseItem from '../CourseItem';
import Pagination from '../Pagination';

function CourseList(props) {
  const { courseList } = props;

  return (
    <div className="course-grid-list">
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="course-1x all-course-grid">
            <div className="container">
              <div className="row">
                <div className="all-course">
                  <div className="row">
                    {courseList.length && renderCourseList(courseList)}

                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const renderCourseList = (courseList) => {
  return courseList.map((course) => <CourseItem key={course.id} course={course} />);
};

export default CourseList;
