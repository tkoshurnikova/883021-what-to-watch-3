import axios from "axios";

const Error = {
  REQUEST_ERRORS: [400, 404, 500],
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthorized, onRequestFail) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthorized();
      throw err;
    }

    if (!response || Error.REQUEST_ERRORS.includes(response.status)) {
      onRequestFail();
      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
