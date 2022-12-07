import {create, CancelToken} from 'apisauce';
import Config from 'react-native-config';

const cancelRequestList = {};

// define the api
export const api = create({
  // baseURL: 'http://localhost:3000/',
  baseURL: Config.API_URL,
  // headers: {
  //     Accept: 'application',
  //     'Content-Type': 'application/json',
  // },
  timeout: __DEV__ ? 5000 : 60000,
});

const cancelRequests = (...keys) => {
  keys.forEach(key => {
    if (cancelRequestList[key]) {
      cancelRequestList[key]();
    }
  });
};

const getErrorMessage = response => {
  let errorMessage = response.problem;
  if (errorMessage === 'NETWORK_ERROR') {
    errorMessage = 'Network error';
  } else if (errorMessage === 'TIMEOUT_ERROR') {
    errorMessage = 'Something went wrong. Please try again later';
  } else if (errorMessage === 'SERVER_ERROR') {
    errorMessage = 'Server error';
  }
  return errorMessage;
};

const processResonse = response => {
  console.log(JSON.stringify(response, null, 2));
  const status = response.ok;
  const data = response.data || {
    status,
    message: getErrorMessage(response),
  };
  return {data, status, cancel: response.problem === 'CANCEL_ERROR'};
};

const get = async data => {
  const {url, cancelKey, params, headers} = data;
  return api
    .get(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(res => processResonse(res));
};

const put = async data => {
  const {url, cancelKey, params, headers} = data;
  return api
    .put(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(res => processResonse(res));
};

const post = async data => {
  console.log('data: ', data);
  const {url, cancelKey, params, headers} = data;
  return api
    .post(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(res => processResonse(res));
};

const del = async pdata => {
  const {url, cancelKey, params, data, headers} = pdata;

  return api
    .delete(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
      data,
    })
    .then(res => processResonse(res));
};

const patch = async data => {
  const {url, cancelKey, params, headers} = data;
  return api
    .patch(url, params, {
      cancelToken: new CancelToken(c => (cancelRequestList[cancelKey] = c)),
      headers,
    })
    .then(res => processResonse(res));
};

export {cancelRequests, get, put, post, del, patch};
