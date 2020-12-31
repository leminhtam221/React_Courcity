import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const style = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

function CourseItem(props) {
  const { course, handleDeleteCourse, handleEditCourse } = props;
  const { price, discount, enroll, course_name, course_image, id } = course;
  const { name } = course.teacher_info;

  return (
    <div className={`col-md-3 tile data-${course.categoryId}`}>
      <div className="single-course">
        <div className="hvrbox">
          <img src={course_image} alt="slide 1" className="hvrbox-layer_bottom" />
          <div className="hvrbox-layer_top hvrbox-text">
            <div className="hvrbox-text">
              <a
                href="https://www.youtube.com/watch?v=gwinFP8_qIM"
                className="btn-circle video"
              >
                <i className="fas fa-play" />
              </a>
              <Link to={`course-detail/${id}`}>Preview Course</Link>
            </div>
          </div>
        </div>
        <div className="single-course-content">
          <Link to={`course-detail/${id}`} style={style} className="course-title">
            {course_name}
          </Link>
          <p>{name}</p>
          <div>
            <span>
              <del className="mr-2">{price}$</del> <b>{discount}$</b>
            </span>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  handleDeleteCourse(id);
                }}
              >
                Delete
              </button>
              <button
                className="ml-1 btn btn-success"
                onClick={() => {
                  handleEditCourse(id);
                }}
                data-toggle="modal"
                data-target="#exampleModalEdit"
              >
                Edit
              </button>
            </div>
          </div>
          <h3>
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" /> (4)
            <span>Enroll: {enroll}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default CourseItem;
