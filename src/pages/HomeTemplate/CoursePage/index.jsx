import Loader from 'components/HomeComponents/Loader';
import useImportScript from 'hooks/useImportScript';
import React, { useEffect, useRef, useState } from 'react';
import Banner from './components/Banner';
import CourseContent from './components/CourseContent';
import {
  sortCourseListDesc,
  sortCourseListAsc,
  sortCourseListPriceDesc,
  sortCourseListPriceAsc,
  getFullInfoCourseList,
} from 'helper/Course';
import categoryApi from 'api/categoryApi';
import courseApi from 'api/courseApi';
import teacherApi from 'api/teacherApi';

function CoursePage(props) {
  const [loading, setLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const initTialCourseList = useRef();
  const [filter, setFilter] = useState({
    page: 1,
    limit: 5,
  });

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
        initTialCourseList.current = fullInfoCourseList;

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    fetchApi();
  }, []);

  const sortChange = (value) => {
    const newCourseList = [...courseList];
    let sort;
    if (value === '0') {
      sort = sortCourseListDesc(newCourseList);
    } else if (value === '1') {
      sort = sortCourseListAsc(newCourseList);
    } else if (value === '2') {
      sort = sortCourseListPriceDesc(newCourseList);
    } else {
      sort = sortCourseListPriceAsc(newCourseList);
    }
    setCourseList(sort);
  };

  const handleClickCategory = (categoryId) => {
    let newCourseList = [...initTialCourseList.current];
    newCourseList = newCourseList.filter((course) => categoryId == course.categoryId);
    setCourseList(newCourseList);
  };
  useImportScript();

  return (
    <div>
      {loading && <Loader />}
      <Banner />
      <CourseContent
        courseList={courseList}
        sortCategory={handleClickCategory}
        categoryList={categoryList}
        handleChangeSort={sortChange}
      />
    </div>
  );
}

export default CoursePage;
