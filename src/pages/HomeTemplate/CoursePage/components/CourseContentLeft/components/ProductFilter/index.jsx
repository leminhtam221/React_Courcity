import React from 'react';

function ProductFilter(props) {
  return (
    <div className="card">
      <div className="card-header" id="headingTwo">
        <a
          href="#"
          className="icon-right"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <h3>Filter Product</h3>
        </a>
      </div>
      <div
        id="collapseTwo"
        className="collapse show"
        aria-labelledby="headingTwo"
        data-parent="#accordion"
      >
        <div className="card-body">
          <div className="filter-product">
            <label className="container">
              Feature Products
              <input type="checkbox" defaultChecked="checked" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Latest Products
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Newest Products
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Popular Products
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Trending Products
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Best Sellers
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
            <label className="container">
              Best Rated
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductFilter;
