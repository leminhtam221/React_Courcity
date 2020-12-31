import React from 'react';
import CourseCategoryItem from '../CourseCategoryItem';
import * as img from 'assets/images';

const renderCourseCategoryItem = (categoryList) => {
  let newCategoryList = [];

  for (let index = 1; index <= 4; index++) {
    const category = categoryList[index];
    newCategoryList.push(
      <CourseCategoryItem
        key={category.id}
        classBoxPosition="right-image"
        category={category}
      />
    );
  }
  return newCategoryList;
};

function CourseCategory(props) {
  const { categoryList } = props;

  return (
    <div className="course-category-1x">
      {categoryList.length && (
        <div className="container">
          <div className="row">
            <CourseCategoryItem
              classBoxPosition="left-image"
              category={categoryList[0]}
            />

            <div className="col-md-6">
              <div className="row">{renderCourseCategoryItem(categoryList)}</div>
            </div>

            <div className="category-feature">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4">
                    <div className="single-feature">
                      <img src={img.man2} alt="slide 1" />
                      <h4>Expert Instructors</h4>
                      <p>
                        We rigorously screen and train our instructors ensure that they
                        meet{' '}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-feature">
                      <img src={img.clock} alt="slide 1" />
                      <h4>Lifetime Access</h4>
                      <p>
                        We rigorously screen and train our instructors ensure that they
                        meet{' '}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="single-feature">
                      <img src={img.pc} alt="slide 1" />
                      <h4>Learn Anywhere</h4>
                      <p>
                        We rigorously screen and train our instructors ensure that they
                        meet{' '}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="single-feature">
                      <a href="/#" className="btn-small">
                        Get Started For Free
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCategory;
