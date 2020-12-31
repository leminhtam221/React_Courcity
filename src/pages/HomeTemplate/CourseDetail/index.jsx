import courseApi from 'api/courseApi';
import teacherApi from 'api/teacherApi';
import Loader from 'components/HomeComponents/Loader';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Banner from './components/Banner';
import CourseDetailContainer from './components/CourseDetailContainer';
function CourseDetail(props) {
  const path = useRouteMatch();
  const idCourse = path.params.id;

  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const detailCourse = await courseApi.getDetail(idCourse);
        const detailTeacher = await teacherApi.getDetail(detailCourse.teacherId);

        detailCourse.teacher_info = detailTeacher;

        setCourse(detailCourse);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      {loading && <Loader />}
      <Banner course={course} />
      {Object.keys(course).length && <CourseDetailContainer course={course} />}
    </div>
  );
}

export default CourseDetail;
