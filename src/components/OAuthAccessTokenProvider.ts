import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'


function OAuthAccessTokenProvider() {
    const navigate = useNavigate();
    useEffect(() => {
        axios.post('http://localhost:8080/reissue',{} ,{ withCredentials: true })
        .then((response) =>{
          console.log(response.headers);
          const accessToken = response.headers['access'];
           if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            navigate("/book");
            }
        }).catch((error) => {
            console.error('Access token reissue failed:', error);
       
        });
      }, []);

      return null;

}

export default OAuthAccessTokenProvider;