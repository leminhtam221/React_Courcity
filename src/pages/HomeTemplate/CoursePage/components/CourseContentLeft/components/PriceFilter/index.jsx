import React from 'react';

function PriceFilter(props) {
  return (
    <div className="card">
      <div className="card-header" id="headingThree">
        <a
          href="#"
          className="icon-right"
          data-toggle="collapse"
          data-target="#collapseThree"
          aria-expanded="true"
          aria-controls="collapseThree"
        >
          <h3>Price</h3>
        </a>
      </div>
      <div
        id="collapseThree"
        className="collapse show"
        aria-labelledby="headingThree"
        data-parent="#accordion"
      >
        <div className="card-body">
          <div className="price-filter">
            <div className="single-select d-flex flex-row">
              <div className="form-group ">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>$10</option>
                  <option>$20</option>
                  <option>$30</option>
                  <option>$40</option>
                  <option>$50</option>
                </select>
              </div>
              <p>-</p>
              <div className="form-group">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>$10</option>
                  <option>$20</option>
                  <option>$30</option>
                  <option>$40</option>
                  <option>$50</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceFilter;
