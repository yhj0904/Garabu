import { Form, Container, Row, Col, Stack } from "react-bootstrap";
import DateInput from "../components/DateInput";
import {insertFirstData} from "../store/createSlice"
import { useDispatch, useSelector } from "react-redux";

function Insertdata() {
    const state = useSelector((state) =>{
        return state;
    });

    const dispatch = useDispatch();
    

    return (
        <Container>
            <Row>
                <Col>
                    <Stack>
                    <Form.Label htmlFor="inputDate">날짜</Form.Label>
                        <DateInput />
                     
                        <Form.Label htmlFor="inputCount">금액</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputCount"
                            aria-describedby="passwordHelpBlock"
                        />
                         <Form.Label htmlFor="inputClass">분류(객체)</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputClass"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                         <Form.Label htmlFor="inputAsset">결제자산</Form.Label>
                         <Form.Select aria-label="Default select example">
                        <option>객체선택</option>
                        <option value="1">Cash</option>
                        <option value="2">bank</option>
                        <option value="3">cradit card</option>
                        <option value="4">add</option>
                      </Form.Select>
                        <Form.Label htmlFor="inputContext">내용</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputContext"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                        
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Insertdata;