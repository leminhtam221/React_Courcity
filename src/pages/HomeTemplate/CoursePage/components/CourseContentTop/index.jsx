import React from 'react';

function CourseContentTop(props) {
  const { handleChangeSort } = props;

  const sortChange = (e) => {
    const value = e.target.value;
    handleChangeSort(value);
  };

  return (
    <div className="course-header-right">
      <div className="row">
        <div className="col-md-6">
          <div className="search-box d-flex flex-row">
            <p>Sort by : </p>
            <select className="form-control styleSelect" onChange={sortChange}>
              <option value={0}>Sort by new</option>
              <option value={1}>Sort by Old</option>
              <option value={2}>Price high to low</option>
              <option value={3}>Price low to high</option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="course-tab">
            <p>All prices are in USD</p>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <i className="fas fa-th" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseContentTop;
