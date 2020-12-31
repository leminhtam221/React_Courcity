import api from './api';

const teacherApi = {
  getAll(params) {
    const url = '/teacher';
    return api.get(url, { params });
  },
  getDetail(id) {
    const url = `/teacher/${id}`;
    return api.get(url);
  },
  add(data) {
    const url = `/teacher`;
    return api.post(url, data);
  },
  update(id, data) {
    const url = `/teacher/${id}`;
    return api.put(url, data);
  },
  delete(id) {
    const url = `/teacher/${id}`;
    return api.delete(url);
  },
};

export default teacherApi;
