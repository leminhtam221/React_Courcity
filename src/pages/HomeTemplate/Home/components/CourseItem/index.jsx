import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const style = {
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
};

function CourseItem(props) {
  const { course, onClickCard } = props;
  const { price, discount, enroll, course_name, course_image, id } = course;
  const { name } = course.teacher_info;
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    let listCard = [];
    if (JSON.parse(localStorage.getItem('card'))) {
      listCard = JSON.parse(localStorage.getItem('card'));
    }
    const index = listCard.findIndex((item) => item.id === course.id);
    if (index >= 0) {
      setIsBuy(true);
    }
  }, []);

  const handleClickAddToCard = () => {
    setIsBuy(true);
    onClickCard(course);
  };
  useEffect(() => {
    $('.course-title').hover(
      function () {
        $(this).css('color', '#007bff').stop(true, true);
      },
      function () {
        $(this).css('color', 'black');
      }
    );
    $('.course-title').siblings('p').css('color', 'black');
  }, []);

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
            <span>
              <button
                className={`mt 1 btn ${isBuy ? 'btn-warning' : 'btn-primary'}`}
                onClick={handleClickAddToCard}
              >
                {isBuy ? <span>Have into card</span> : <span>Add to card</span>}
              </button>
            </span>
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
