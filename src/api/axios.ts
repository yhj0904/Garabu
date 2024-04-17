import axios from 'axios';

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

// 요청 인터셉터: 요청을 보내기 전에 토큰을 헤더에 추가
api.interceptors.request.use(config => {
  // 로컬 스토리지에서 access 토큰 가져오기
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['access'] = accessToken;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// 응답 인터셉터: 401 에러 시 토큰 재발급
api.interceptors.response.use(response => {
  return response;
}, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      const response = await api.post('/reissue', {}, {withCredentials: true});

      // 새로운 토큰 저장하고 원래 요청 다시 시도
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      api.defaults.headers.common['access'] = accessToken;

      return api(originalRequest);
    } catch (error) {
      console.error('Unable to refresh token', error);
      return Promise.reject(error);
    }
  }
  return Promise.reject(error);
});

export default api;
