import axios from 'axios';

const client = {
  get: async (url, config = null) => await axios.get(url, config),
  post: async (url, data, config = null) => await axios.post(url, data, config),
  delete: async (url, config = null) => await axios.delete(url, config),
  put: async (url, data, config = null) => await axios.put(url, data, config)
};

export default client;
