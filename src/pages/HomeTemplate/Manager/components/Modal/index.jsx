import React, { useState } from 'react';

function ModalCourse(props) {
  const { handleSubmitModal } = props;
  const [courseName, setCourseName] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  const onSubmitModal = (e) => {
    e.preventDefault();
    const formData = {
      course_name: courseName,
      price: coursePrice,
      discount: '50.00',
      teacherId: 10,
      categoryId: 1,
      enroll: 68,
      course_image:
        'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
    };
    
    handleSubmitModal(formData);
  };

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    switch (name) {
      case 'courseName':
        setCourseName(value);
        break;

      case 'coursePrice':
        setCoursePrice(value);
        break;
    }
  };

  return (
    <div className="container mt-3">
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Add course
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmitModal}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Course name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Course name"
                    name="courseName"
                    value={courseName}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Price"
                    name="coursePrice"
                    value={coursePrice}
                    onChange={handleChangeInput}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCourse;
