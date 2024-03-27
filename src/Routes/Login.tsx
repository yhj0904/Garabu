import axios from "axios";
import { useState } from "react";
import {Col, Row, Form, Button,Container } from "react-bootstrap";
import qs from "qs";
import OAuth2Login from "../components/OAuth2Login";

function Login(){

  
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSaveChanges = async(e:any) =>{
      e.preventDefault();
      const data = qs.stringify({
        username: name,
        password: password,
      });
    
      const config = {
        method: 'post',
        url: 'http://localhost:8080/login',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data : data
      };
    
      axios(config).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });
    
    }

    return(
      <div>
        <Form onSubmit={handleSaveChanges}> 
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="username" placeholder="username" onChange={(e)=>setName(e.target.value)} />
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
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Login</Button>
        </Col>
      </Form.Group>
    </Form>

      <Container>
        <OAuth2Login />
      </Container>

    </div>
    )
}

export default Login;