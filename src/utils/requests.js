import {axiosAgent} from '../libs';
const responseBody = response => response.data;

export const requests = {
  get: (url, params = {}) => axiosAgent.get(url, {params}).then(responseBody),
  post: (url, data = {}) => axiosAgent.post(url, data).then(responseBody),
  put: (url, data = {}) => axiosAgent.put(url, data).then(responseBody),
};
