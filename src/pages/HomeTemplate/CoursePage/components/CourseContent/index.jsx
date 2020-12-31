import React from 'react';
import CourseContentLeft from '../CourseContentLeft';
import CourseList from '../CourseList';
import CourseContentTop from '../CourseContentTop';
import * as img from 'assets/images';

function CourseContent(props) {
  const { courseList, categoryList, handleChangeSort, sortCategory } = props;

  return (
    <div>
      <div className="course-header-1x">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="course-header-left-top">
                <p>
                  <img src={img.cross} alt="Image" /> Remove Filter
                </p>
              </div>
              <CourseContentLeft
                categoryList={categoryList}
                sortCategory={sortCategory}
              />
            </div>

            <div className="col-md-9">
              <CourseContentTop handleChangeSort={handleChangeSort} />
              <CourseList courseList={courseList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContent;
