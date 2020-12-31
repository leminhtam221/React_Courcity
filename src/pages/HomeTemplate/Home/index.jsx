import Loader from 'components/HomeComponents/Loader';
import React from 'react';
import AchiveGoal from './components/AchiveGoal';
import Banner from './components/Banner';
import Client from './components/Client';
import Course from './components/Course';
import CourseCategory from './components/CourseCategory';
import { useEffect, useState } from 'react';
import categoryApi from 'api/categoryApi';
import courseApi from 'api/courseApi';
import useImportScript from 'hooks/useImportScript';
import teacherApi from 'api/teacherApi';
import { sortCourseListDesc, getFullInfoCourseList } from 'helper/Course';

function Home(props) {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const fetchCategoryList = await categoryApi.getAll();
        const fetchCourseList = await courseApi.getAll();
        const fetchTeacherList = await teacherApi.getAll();

        sortCourseListDesc(fetchCourseList);
        const fullInfoCourseList = getFullInfoCourseList(
          fetchCourseList,
          fetchTeacherList
        );

        setCategoryList(fetchCategoryList);
        setCourseList(fullInfoCourseList);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  useImportScript();

  return (
    <div>
      {loading && <Loader />}
      <Banner categoryList={categoryList} />
      <CourseCategory categoryList={categoryList} />
      <Course courseList={courseList} categoryList={categoryList} />
      <AchiveGoal />
      <Client />
    </div>
  );
}

export default Home;
