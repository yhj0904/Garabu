import { Form, Container, Row, Col, Stack, Button } from "react-bootstrap";
import DateInput from "../components/DateInput";
import { useDispatch, useSelector } from "react-redux";
import { updateTransaction } from "../store/createSlice";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";

function Insertdata() {
    const transactionData = useSelector((state: RootState) => { return state.transaction });

    console.log(transactionData)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <Stack>
                        <Form.Label htmlFor="inputDate">날짜</Form.Label>
                        <DateInput

                        />
                        <Form.Label htmlFor="inputCount">금액</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputCount"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputCreateUser">작성자</Form.Label>
                        <Form.Select aria-label="Who" name="creater" >
                            <option>Who?</option>
                            <option value="1">you</option>
                            <option value="2">me</option>
                            <option value="3">UnI</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputCustomer">주체</Form.Label>
                        <Form.Select aria-label="User"
                            name="customer"
                        >
                            <option>User?</option>
                            <option value="1">you</option>
                            <option value="2">me</option>
                            <option value="3">UnI</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputCategory">분류(객체)</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputCategory"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Select aria-label="Category"
                            name="category"
                        >
                            <option>Category?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputAsset">결제자산</Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="category"
                        >
                            <option>객체선택</option>
                            <option value="1">Cash</option>
                            <option value="2">bank</option>
                            <option value="3">cradit card</option>
                            <option value="4">add</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputContents">내용</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputContents"

                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                        <Form>
                        <div id="" className="mb-3">
                            <Form.Check
                                inline
                                type="radio"
                                label="Transfer"
                                id="amounttype"
                                required
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Expenditure"
                                id="amounttype"
                                required
                            />
                            <Form.Check
                                inline
                                type="radio"
                                label="Income"
                                id="amounttype"
                                required
                            />
                            </div>
                        </Form>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button variant="secondary" onClick={() => { 
                                dispatch(updateTransaction(transactionData)) 
                                navigate('/detail')
                             }}>Save changes</Button>
                            <Button variant="outline-secondary">Cancel</Button>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Insertdata;