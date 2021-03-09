import axios from 'axios';

const client = {
  get: (url, config = null) => axios.get(url, config),
  post: (url, data, config = null) => axios.post(url, data, config),
  delete: (url, config = null) => axios.delete(url, config),
  put: (url, data, config = null) => axios.put(url, data, config)
};

export default client;
