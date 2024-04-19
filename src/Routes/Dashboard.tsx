import { Container, Row, Col, Alert, FloatingLabel, Form } from "react-bootstrap";
import CalendarPage from "./CalendarPage";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { AppDispatch, RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { updateMemberTransaction } from '../store/Member'
import { addBookName, fetchMemberTransaction } from '../store/LoggedInUserInfo'

function Dashboard() {
    const transactionData = useSelector((state: RootState) => { return state.LoginMember });
    const LoggedInInfo = useSelector((state: RootState) => state.LoggedInMember);

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        /*api.get('/user/me')
        .then((res:any) => {
            console.log(res);
            setEmail(res.data.email);
            setUserName(res.data.username);
            dispatch(updateMemberTransaction({ 
                username: res.data.username, 
                email: res.data.email,
                error: '' // 에러 메시지 초기화
            }));
        }) .catch((error) => {
            if (error.response && error.response.status === 401) {
                setError('Please log in to continue.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        });

        api.get('/api/v2/book/mybooks')
        .then((res:any)=>{
            console.log(res.data)
        })*/
        dispatch(fetchMemberTransaction())

    }, [dispatch]);

    return (

        <Container>
            {error && <Alert variant="danger">{error}</Alert>}

            <div>
                <Container>
                <FloatingLabel controlId="floatingSelect" label=" 가계부 이름 ">
                    <Form.Select aria-label="Floating label select example">
                        {LoggedInInfo.bookNames && LoggedInInfo.bookNames.map((bookName, index) => (
                        <option value={index}>{bookName}</option>
                    ))}
                    </Form.Select>
                </FloatingLabel>
                </Container>
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