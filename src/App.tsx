import React from 'react';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import {Routes,Route} from "react-router-dom"
import Dashboard from "./Routes/Dashboard"
import Details from "./Routes/Details"
import Lists from "./Routes/List"
import Insertdata from './Routes/Insertdata';

import './App.css';
import TransactionDetail from './Routes/TransactionDetail';
import Register from './Routes/Register';
import Login from './Routes/Login';
import LedgerBookName from './Routes/LedgerBookName';
import Category from './Routes/Category';

function App() {
  return (


    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Garabu</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/input">추가하기</Nav.Link>
            <Nav.Link href="/Details">전체 거래 내역</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category">카테고리 설정</NavDropdown.Item>
              <NavDropdown.Item href="/register">
                회원가입
              </NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/book">
                가계부 만들기
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Routes>
      <Route path='/' element={ <Dashboard />} />
      <Route path='/details' element={<TransactionDetail />} />
      <Route path='/list' element={<Lists />} />
      <Route path='/input' element={<Insertdata />} />
      <Route path='*' element={<div>404 not found</div>} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login /> }/>
     
      <Route path='/book' element={<LedgerBookName/>}/>
       
  
        <Route path='/category' element={<Category />} />
    </Routes>




    </div>
  );
}

export default App;
