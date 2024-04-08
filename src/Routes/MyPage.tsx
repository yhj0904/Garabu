import axios from 'axios';
import { useEffect, useState } from 'react';
import {Form} from 'react-bootstrap';


function Mypage() {
    const accessToken = localStorage.getItem('accessToken');
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:8080/user/me',{
            headers: {
              'access': accessToken
            }
          })
        .then((res:any) => {
            console.log(res);
            setEmail(res.data.email);
            setUserName(res.data.username);
        })
    },[]);

    return(
      <div>
      <h2>My Page</h2>
      <div>
        <strong>Username:</strong> {username}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
    </div>
    )
}

export default Mypage;