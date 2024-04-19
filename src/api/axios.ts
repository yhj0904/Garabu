import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axios.post('http://localhost:8080/reissue', {}, { withCredentials: true })
      .then(res => {
        if (res.status === 200) {
       
          console.log(res.headers);
          const accessToken = res.headers['access'];
          localStorage.setItem('accessToken', accessToken);
          api.defaults.headers.common['access'] = accessToken;
          console.log("성공!")
          return api(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);
export default api;
