import axios from "axios";
import { useState } from "react";
import {Col, Row, Form, Button } from "react-bootstrap";

function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSaveChanges = async(e:any) =>{
      e.preventDefault();
      const res = axios.post('http://garaculedgerserver-env.eba-qmqe83ke.us-east-1.elasticbeanstalk.com/join',{
        username: name,
        email : email,
        password : password
      }).then((e)=>{
        alert(JSON.stringify(e.data))
      })
      
      console.log(name,email,password);
      console.log('전송~~')
          console.log(res)
    }

    return(
        <Form onSubmit={handleSaveChanges}> 
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
        <Form.Label column sm={2}>
         Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="Name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>



    )
}

export default Register;