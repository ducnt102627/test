import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api-test-web.agiletech.vn',
  timeout: 3000,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
  }
});
const refreshAccessToken = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken) {
      throw new Error('No refresh token available');
    }
    const { data } = await instance.post('/auth/refreshToken', { refreshToken });
    localStorage.setItem('accessToken', data.accessToken);
    instance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
  } catch (error) {
    console.error('Failed to refresh access token:', error);
  }
}
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await refreshAccessToken();
        originalRequest.headers.Authorization = instance.defaults.headers.common.Authorization;
        return instance(originalRequest);
      } catch (refreshError) {
        console.error('Failed to refresh token:', refreshError);
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;