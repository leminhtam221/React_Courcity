import api from './api';

const courseApi = {
  getAll(params) {
    const url = `/course`;
    return api.get(url, { params });
  },
  getDetail(id) {
    const url = `/course/${id}`;
    return api.get(url);
  },
  add(data) {
    const url = `/course`;
    return api.post(url, data);
  },
  update(id, data) {
    const url = `/course/${id}`;
    return api.put(url, data);
  },
  delete(id) {
    const url = `/course/${id}`;
    return api.delete(url);
  },
};

export default courseApi;
