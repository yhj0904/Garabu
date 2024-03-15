import { Container, Row, Col, } from "react-bootstrap";

function Dashboard() {
    return (

        <Container>

            <Row>
                <Col>달력</Col>
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