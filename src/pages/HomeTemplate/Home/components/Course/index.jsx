import React from 'react';
import CourseItem from '../CourseItem';
import NavCategory from './components/NavCategory';
import swal from 'sweetalert';

function Course(props) {
  const { categoryList, courseList } = props;

  const renderCourseList = (couseList) => {
    return couseList.map((course) => (
      <CourseItem key={course.id} course={course} onClickCard={handleClickAddToCard} />
    ));
  };

  const handleClickAddToCard = (course) => {
    if (localStorage.getItem('card')) {
      const listCard = JSON.parse(localStorage.getItem('card'));
      const index = listCard.findIndex((item) => item.id === course.id);
      if (index < 0) {
        listCard.push(course);
        localStorage.setItem('card', JSON.stringify(listCard));
        swal({
          title: 'Add success',
          icon: 'success',
        });
      } else {
        swal({
          title: 'Sản phẩm đã có trong giỏ hàng',
          icon: 'warning',
        });
      }
    } else {
      const listCard = [];
      listCard.push(course);
      localStorage.setItem('card', JSON.stringify(listCard));
    }
  };

  return (
    <div className="course-1x">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title-middle">
              <h2>Coursecity Top Courses</h2>
            </div>
          </div>

          <NavCategory categoryList={categoryList} />

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
