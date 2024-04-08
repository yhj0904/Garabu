import axios from 'axios';
import { useEffect, useState } from 'react';
import {updateMemberTransaction} from '../store/Member'
import { useDispatch, } from "react-redux";


function Mypage() {
 
    const accessToken = localStorage.getItem('accessToken');
    
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const dispatch = useDispatch();

    const newTransaction = {
      username, // id는 예시로 현재 시간의 타임스탬프를 사용
      email, // 'YYYY-MM-DD'
  };

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
            dispatch(updateMemberTransaction(newTransaction));
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