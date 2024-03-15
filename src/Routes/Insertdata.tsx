import { Form, Container, Row, Col, Stack, Button } from "react-bootstrap";
import DateInput from "../components/DateInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateTransaction } from "../store/createSlice";
import { RootState } from "../store/store";
import TransactionDetail from "./TransactionDetail";

function Insertdata() {
    const transactionData = useSelector((state: RootState) => { return state.transaction });

    console.log(transactionData)

    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        id: new Object(),
        date: '', // DateInput 컴포넌트로부터 받은 데이터를 저장하는 방법을 결정해야 함
        amount: 0,
        creater: '',
        customer: '',
        category: '',
        asset: '',
        contents: '',
        amounttype: '', // 수입, 지출, 이체 구분
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleDateChange = (newDate: any) => {
        setFormData(formData => ({
            ...formData,
            date: newDate,
        }));
    };


    const handleSubmit = (e: any) => {
        e.preventDefault(); // 폼 제출의 기본 동작 방지
        dispatch(updateTransaction(formData)); // Redux 액션 디스패치
        <TransactionDetail />
    };



    return (
        <Container>
            <Row>
                <Col>
                    <Stack>
                        <Form.Label htmlFor="inputDate">날짜</Form.Label>
                        <DateInput
                            value={formData.date}
                            onChange={handleDateChange}
                        />
                        <Form.Label htmlFor="inputCount">금액</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputCount"
                            value={formData.amount}
                            onChange={handleChange}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Label htmlFor="inputCreateUser">작성자</Form.Label>
                        <Form.Select aria-label="Who" name="creater" value={formData.creater} onChange={handleChange}>
                            <option>Who?</option>
                            <option value="1">you</option>
                            <option value="2">me</option>
                            <option value="3">UnI</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputCustomer">주체</Form.Label>
                        <Form.Select aria-label="User"
                            value={formData.customer}
                            name="customer"
                            onChange={handleChange}>
                            <option>User?</option>
                            <option value="1">you</option>
                            <option value="2">me</option>
                            <option value="3">UnI</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputCategory">분류(객체)</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputCategory"
                            value={formData.category}
                            onChange={handleChange}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Select aria-label="Category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}>
                            <option>Category?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputAsset">결제자산</Form.Label>
                        <Form.Select aria-label="Default select example"
                            name="category"
                            value={formData.asset}
                            onChange={handleChange}>
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
                            value={formData.contents}
                            onChange={handleChange}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                        <div>
                            <Form.Check
                                type="radio"
                                label="Transfer"
                                name="amountType"
                                value="transfer"
                                onChange={handleChange}
                                checked={formData.amounttype === "transfer"}
                                required
                            />
                            <Form.Check
                                type="radio"
                                label="Expenditure"
                                name="amountType"
                                value="expenditure"
                                onChange={handleChange}
                                checked={formData.amounttype === "expenditure"}
                                required
                            />
                            <Form.Check
                                type="radio"
                                label="Income"
                                name="amountType"
                                value="income"
                                onChange={handleChange}
                                checked={formData.amounttype === "income"}
                                required
                            />

                        </div>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button variant="secondary" onClick={handleSubmit}>Save changes</Button>
                            <Button variant="outline-secondary">Cancel</Button>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Insertdata;