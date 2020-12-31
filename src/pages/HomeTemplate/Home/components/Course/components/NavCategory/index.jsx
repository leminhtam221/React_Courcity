import React from 'react';

function NavCategory(props) {
  const { categoryList } = props;

  return (
    <div className="col-md-12">
      <div id="filters" className="course-menu">
        <button className="filter active" data-filter="all">
          All Courses
        </button>

        {categoryList.length && renderNavCategory(categoryList)}
      </div>
    </div>
  );
}

const renderNavCategory = (categoryList) => {
  const newCategoryList = [];
  for (let index = 0; index < 5; index++) {
    const category = categoryList[index];
    newCategoryList.push(
      <button
        className="filter"
        key={category.id}
        data-rel={`data-${category.id}`}
        data-filter={`.data-${category.id}`}
      >
        {category.category_name}
      </button>
    );
  }
  return newCategoryList;
};

export default NavCategory;
