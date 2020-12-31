import React from 'react';
import * as img from 'assets/images';

function CategoryFilter(props) {
  const { categoryList, sortCategory } = props;
  const hanleClickCategory = (categoryId) => {
    sortCategory(categoryId);
  };

  return (
    <div className="card">
      <div className="card-header" id="headingOne">
        <a
          href="#"
          className="icon-right"
          data-toggle="collapse"
          data-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <h3>Category</h3>
        </a>
      </div>
      <div
        id="collapseOne"
        className="collapse show"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div className="card-body">
          <div className="category">
            <ul>
              {categoryList.length &&
                categoryList.map((category) => (
                  <li key={category.id}>
                    <a
                      onClick={() => {
                        hanleClickCategory(category.id);
                      }}
                    >
                      <img src={img.arrowRight} alt="Image" />
                      {category.category_name} <span></span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
