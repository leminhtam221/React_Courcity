export const sortCourseListDesc = (courseList) => {
  if (courseList.length) {
    courseList.sort((a, b) => {
      const first = parseInt(b.id);
      const second = parseInt(a.id);

      if (second < first) {
        return 1;
      }
      if (second > first) {
        return -1;
      }
      return 0;
    });
  }
  return courseList;
};

export const sortCourseListAsc = (courseList) => {
  if (courseList.length) {
    courseList.sort((a, b) => {
      const first = parseInt(b.id);
      const second = parseInt(a.id);

      if (second < first) {
        return -1;
      }
      if (second > first) {
        return 1;
      }
      return 0;
    });
  }
  return courseList;
};

export const sortCourseListPriceDesc = (courseList) => {
  if (courseList.length) {
    courseList.sort((a, b) => {
      const first = parseInt(b.discount);
      const second = parseInt(a.discount);

      if (second < first) {
        return 1;
      }
      if (second > first) {
        return -1;
      }
      return 0;
    });
  }
  return courseList;
};

export const sortCourseListPriceAsc = (courseList) => {
  if (courseList.length) {
    courseList.sort((a, b) => {
      const first = parseInt(b.discount);
      const second = parseInt(a.discount);

      if (second < first) {
        return -1;
      }
      if (second > first) {
        return 1;
      }
      return 0;
    });
  }
  return courseList;
};

export const getFullInfoCourseList = (courseList, teacherList) => {
  return courseList.map((course) => {
    for (let index = 0; index < teacherList.length; index++) {
      const teacher = teacherList[index];
      if (course.teacherId == teacher.id) {
        course.teacher_info = teacher;
        break;
      }
    }
    return course;
  });
};
