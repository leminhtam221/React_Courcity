import React from 'react';

function Pagination(props) {
  return (
    <div className="col-md-12">
      <div className="course-pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fas fa-angle-left" />
            </a>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="fas fa-angle-right" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Pagination;
