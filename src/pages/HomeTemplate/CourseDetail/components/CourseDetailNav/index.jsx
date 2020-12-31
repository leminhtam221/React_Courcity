import React from 'react';
import Curriculum from './components/Curriculum';
import Instructor from './components/Instructor';
import OverView from './components/Overview';
import Review from './components/Review';

function CourseDetailNav(props) {
  return (
    <div className="course-menu-nav">
      <ul
        className="nav nav-tabs nav-fill"
        id="myTab"
        role="tablist"
        style={{ margin: 0 }}
      >
        <li className="nav-item">
          <a
            className="nav-link active"
            id="overview-tab"
            data-toggle="tab"
            href="#overview"
            role="tab"
            aria-controls="overview"
            aria-selected="true"
          >
            {' '}
            <i className="far fa-file-alt" /> Overview
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="curriculum-tab"
            data-toggle="tab"
            href="#curriculum"
            role="tab"
            aria-controls="curriculum"
            aria-selected="false"
          >
            <i className="fas fa-cube" /> Curriculum
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="instructor-tab"
            data-toggle="tab"
            href="#instructor"
            role="tab"
            aria-controls="instructor"
            aria-selected="false"
          >
            <i className="far fa-user" /> Instructor
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            id="review-tab"
            data-toggle="tab"
            href="#review"
            role="tab"
            aria-controls="review"
            aria-selected="false"
          >
            <i className="far fa-comment" /> Review
          </a>
        </li>
      </ul>
      <div className="tab-content course-menu-tab" id="myTabContent">
        <OverView />
        <Curriculum />
        <Instructor />
        <Review />
      </div>
    </div>
  );
}

export default CourseDetailNav;
