import axios from 'axios';
import { useEffect } from 'react';
import {Form} from 'react-bootstrap';


function Mypage() {
    const accessToken = localStorage.getItem('accessToken');
    
    useEffect(()=>{
        axios.get('http://localhost:8080/user/me',{
            headers: {
              'access': accessToken
            }
          })
        .then((res) => {
            console.log(res)
        })
    },[]);

    return(
        <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>username</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    )
}

export default Mypage;