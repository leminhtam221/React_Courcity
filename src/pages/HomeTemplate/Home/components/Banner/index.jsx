import React from 'react';
import * as img from 'assets/images';

function Banner(props) {
  const { categoryList } = props;

  return (
    <div className="main-banner">
      <div className="hvrbox">
        <img src={img.banner1} alt="Mountains" className="hvrbox-layer_bottom" />
        <div className="hvrbox-layer_top">
          <div className="container">
            <div className="overlay-text text-center">
              <h3>The Future Begins Here!</h3>
              <p>
                Working collaboratively to ensure every student achieves academically,
                <br /> socially, and emotionally.
              </p>
              <div className="col-md-8 offset-md-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="Enter Your Search Here"
                  />
                  <div className="input-group-append styleSelect">
                    <select id="inputGroupSelect01">
                      <option defaultValue>All Categories</option>

                      {categoryList &&
                        categoryList.map((category) => (
                          <option key={category.id} value={category.category_name}>
                            {category.category_name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="input-group-append">
                    <button className="btn btn-search" type="button">
                      <img src={img.search} alt="Image" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="slider-feature">
                <ul>
                  <li>
                    <img src={img.book} alt="Mountains" /> 2502 Course
                  </li>
                  <li>
                    <img src={img.cap} alt="Mountains" /> 32052 Students
                  </li>
                  <li>
                    <img src={img.man} alt="Mountains" /> 459 Teachers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
