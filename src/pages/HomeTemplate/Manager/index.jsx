import Loader from 'components/HomeComponents/Loader';
import React from 'react';
import Course from './components/Course';
import { useEffect, useState } from 'react';
import courseApi from 'api/courseApi';
import useImportScript from 'hooks/useImportScript';
import teacherApi from 'api/teacherApi';
import { sortCourseListDesc, getFullInfoCourseList } from 'helper/Course';
import swal from 'sweetalert';
import ModalCourse from './components/Modal';
import ModalCourseEdit from './components/ModalEdit';

function Management() {
  const [loading, setLoading] = useState(false);
  const [courseList, setCourseList] = useState([]);
  const [detailCourse, setDetailCourse] = useState({});

  const fetchApi = async () => {
    try {
      setLoading(true);
      const fetchCourseList = await courseApi.getAll();
      const fetchTeacherList = await teacherApi.getAll();

      sortCourseListDesc(fetchCourseList);
      const fullInfoCourseList = getFullInfoCourseList(fetchCourseList, fetchTeacherList);

      setCourseList(fullInfoCourseList);

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useImportScript();

  const handleDeleteCourse = (idCourse) => {
    swal({
      title: 'Are you sure?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        courseApi.delete(idCourse).then(() => {
          fetchApi();
          swal({
            title: 'Delete success',
            icon: 'success',
          });
        });
      }
    });
  };

  const handleSubmitModal = (formData) => {
    courseApi.add(formData).then(() => {
      fetchApi();
      swal({
        title: 'Add success',
        icon: 'success',
      });
    });
  };

  const handleEditCourse = (idCourse) => {
    courseApi.getDetail(idCourse).then((result) => {
      setDetailCourse(result);
    });
  };

  const handleUpdate = (id, formData) => {
    courseApi.update(id, formData).then((result) => {
      fetchApi();
    });
  };

  return (
    <div>
      {loading && <Loader />}
      <ModalCourse handleSubmitModal={handleSubmitModal} />
      <ModalCourseEdit handleUpdate={handleUpdate} detailCourse={detailCourse} />
      <Course
        courseList={courseList}
        handleDeleteCourse={handleDeleteCourse}
        handleEditCourse={handleEditCourse}
      />
    </div>
  );
}

export default Management;
