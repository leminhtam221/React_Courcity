import api from './api';

const userApi = {
  getAll(params) {
    const url = '/user';
    return api.get(url, { params });
  },
  getDetail(id) {
    const url = `/user/${id}`;
    return api.get(url);
  },
  add(data) {
    const url = `/user`;
    return api.post(url, data);
  },
  update(id, data) {
    const url = `/user/${id}`;
    return api.put(url, data);
  },
  delete(id) {
    const url = `/user/${id}`;
    return api.delete(url);
  },
};

export default userApi;
