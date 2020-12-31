import api from './api';

const categoryApi = {
  getAll(params) {
    const url = '/category';
    return api.get(url, { params });
  },
  getDetail(id) {
    const url = `/category/${id}`;
    return api.get(url);
  },
  add(data) {
    const url = `/category`;
    return api.post(url, data);
  },
  update(id, data) {
    const url = `/category/${id}`;
    return api.put(url, data);
  },
  delete(id) {
    const url = `/category/${id}`;
    return api.delete(url);
  },
};

export default categoryApi;
