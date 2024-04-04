import { Container, Nav, Navbar, NavDropdown, Offcanvas, Button} from 'react-bootstrap';
import {Routes,Route} from "react-router-dom"
import Dashboard from "./Routes/Dashboard"
import OAuthTokenProvider from "./components/OAuthAccessTokenProvider"
import Lists from "./Routes/List"
import Insertdata from './Routes/Insertdata';
import './App.css';
import TransactionDetail from './Routes/TransactionDetail';
import Register from './Routes/Register';
import Login from './Routes/Login';
import LedgerBookName from './Routes/LedgerBookName';
import Category from './Routes/Category';
import Mypage from './Routes/MyPage';
import {useState} from 'react'

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <NavDropdown.Item href="/mypage">
                My Page
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement={'end'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.

          회원 정보

          가계부 새로 생성.

          공동작업자 등록
        </Offcanvas.Body>
      </Offcanvas>
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
      <Route path='/OAuth' element={<OAuthTokenProvider />} />
      <Route path='/mypage' element={<Mypage />} />
    </Routes>




    </div>
  );
}

export default App;
