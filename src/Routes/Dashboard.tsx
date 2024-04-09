import { Container, Row, Col, Alert, } from "react-bootstrap";
import CalendarPage from "./CalenderPage";
import { useEffect,useState } from "react";
import axios from 'axios';
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import {updateMemberTransaction} from '../store/Member'


function Dashboard() {
    const transactionData = useSelector((state: RootState) => { return state.LoginMember });
    const accessToken = localStorage.getItem('accessToken');
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    
    const newTransaction = {
        username, // id는 예시로 현재 시간의 타임스탬프를 사용
        email, // 'YYYY-MM-DD'
        error,
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
            
        }) .catch((error) => {
            if (error.response && error.response.status === 401) {
                // Handling 401 error
                setError('Please log in to continue.');
            }
        })
    },[]);

    return (

        <Container>
            {error && <Alert variant="danger">{error}</Alert>}

            <div>
                <h4> 가계부 이름</h4>
            </div>

            <Row>
                <Col><CalendarPage /></Col>
            </Row>

            <div>
            <h3> Dashboard</h3>
            </div>
            <Row>
                <Col>분류별 지출 그래프</Col>
                <Col>결제 방식별 지출 (수입, 지출)</Col>
            </Row>
            <Row>
                <Col>예산 소진율</Col>
                <Col>현재하루지출</Col>
                <Col>주간 지출 추이</Col>
            </Row>
        </Container>
    )
}

export default Dashboard;