import React from 'react';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
// import ProductFilter from './components/ProductFilter';

function CourseContentLeft(props) {
  const { categoryList, sortCategory } = props;
  return (
    <div className="course-header-left">
      <div id="accordion">
        <CategoryFilter categoryList={categoryList} sortCategory={sortCategory} />
        {/* <ProductFilter /> */}
        <PriceFilter />
      </div>
    </div>
  );
}

export default CourseContentLeft;
