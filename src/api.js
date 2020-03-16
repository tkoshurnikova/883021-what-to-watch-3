import axios from "axios";

export const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/wtw`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    // const {response} = err;
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
