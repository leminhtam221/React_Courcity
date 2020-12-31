import React, { useEffect, useState } from 'react';

function ModalCourseEdit(props) {
  const { handleUpdate, detailCourse } = props;
  const [courseName, setCourseName] = useState('');
  const [coursePrice, setCoursePrice] = useState('');

  useEffect(() => {
    setCourseName(detailCourse.course_name);
    setCoursePrice(detailCourse.price);
  }, [detailCourse]);

  const onSubmitModal = (e) => {
    e.preventDefault();
    let formData = { ...detailCourse };
    const id = formData.id;
    formData.course_name = courseName;
    formData.price = coursePrice;
    handleUpdate(id, formData);
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
      <div
        className="modal fade"
        id="exampleModalEdit"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title edit
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
                  <labe>Course name</labe>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course name"
                    name="courseName"
                    value={courseName}
                    onChange={handleChangeInput}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="text"
                    className="form-control"
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

export default ModalCourseEdit;
