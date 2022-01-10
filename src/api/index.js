import axios from 'axios';

const baseURL = process.env.REACT_APP_API;
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

// // Add a request interceptor
// axiosInstance.interceptors.request.use(function (config) {
//   console.log(
//     'tokkkeen',
//     JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).auth)?.appToken
//   );
//   let token =
//     JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).auth)?.accessToken ||
//     JSON.parse(JSON.parse(window.localStorage.getItem('persist:root')).auth)?.appToken;
//   config.headers.Authorization = `Bearer ${token}`;

//   return config;
// });

export default axiosInstance;
