import React from 'react';

function CourseCategoryItem(props) {
  const { classBoxPosition, category } = props;
  const { category_image, category_name } = category;

  return (
    <div className="col-md-6">
      <div className={`category-left ${classBoxPosition}`}>
        <div className="hvrbox">
          <img src={category_image} alt="slide 1" className="hvrbox-layer_bottom" />
          <div className="hvrbox-layer_top">
            <div className="hvrbox-text">
              <a href="/#">{category_name}</a>
              <h5>800 Course</h5>
              <a href="/#" className="btn-small">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCategoryItem;
