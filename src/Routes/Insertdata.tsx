import { Form, Container, Row, Col, Stack, Button, FloatingLabel, Accordion, ListGroup } from "react-bootstrap";
import DateInput from "../components/DateInput";
import { useDispatch, useSelector } from "react-redux";
import { updateTransaction } from "../store/createSlice";
import { AppDispatch, RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../api/axios";

function Insertdata(props: any) {
    const transactionData = useSelector((state: RootState) => { return state.transaction });
    const LoggedInInfo = useSelector((state: RootState) => state.LoggedInMember);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [amount, setAmount] = useState(0);
    const [creater, setCreater] = useState('');
    const [customer, setCustomer] = useState('');
    const [category, setCategory] = useState('');
    const [asset, setAsset] = useState('');
    const [contents, setContents] = useState('');
    const [memo, setMemo] = useState('');
    const [amounttype, setAmounttype] = useState('');
    const [selectedBookName, setSelectedBookName] = useState(LoggedInInfo.bookNames.length > 0 ? LoggedInInfo.bookNames[0] : '');

    useEffect(() => {

    }, [])

    const handleSaveChanges = async () => {
        const newTransaction = {
            id: Date.now(), // id는 예시로 현재 시간의 타임스탬프를 사용
            date: selectedDate.toISOString().slice(0, 10), // 'YYYY-MM-DD'
            amount,
            creater,
            customer,
            category,
            asset,
            contents,
            memo,
            amounttype,
        };
        api.post('/api/v2/ledger', {
            // 가계부 제목
            date: newTransaction.date,
            amount: newTransaction.amount,
            spender: newTransaction.customer,
            description: newTransaction.contents,
            category: newTransaction.category,
            payment: newTransaction.asset,
            memo: newTransaction.memo,
            amountType: newTransaction.amounttype,
            bookName: selectedBookName,
        }).then((e) => {
            dispatch(updateTransaction(newTransaction));
            console.log(newTransaction)
            console.log(selectedBookName)

        })
        navigate('/details'); // 세부 정보 페이지로 이동
    };

    const handleSelectBookName = (bookName: string) => {
        setSelectedBookName(bookName);
        console.log(bookName); // Logging the book name directly
    };
    return (
        <Container>
            <Row>
                <Col>
                    <Stack>
                        <Container>
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{selectedBookName}</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        {LoggedInInfo.bookNames.map((bookName: string, index: number) => (
                                            <ListGroup.Item
                                                key={index}
                                                action
                                                variant="secondary"
                                                onClick={() => handleSelectBookName(bookName)}
                                                active={selectedBookName === bookName}
                                            >
                                                {bookName}
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                           
                         

                            <Form.Label htmlFor="inputCreateUser">작성자</Form.Label>
                            <Form.Control type="text" placeholder={LoggedInInfo.username} readOnly />
                        </Container>

                        <Form.Label htmlFor="inputDate">날짜</Form.Label>
                        <DateInput selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                        <Form.Label htmlFor="inputCount">금액</Form.Label>
                        <Form.Control
                            type="number"
                            id="inputCount"
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />

                        <Form.Label htmlFor="inputCustomer">주체</Form.Label>
                        <Form.Select aria-label="User" name="customer" onChange={(e) => setCustomer(e.target.value)}>
                            <option>User?</option>
                            <option value="you">you</option>
                            <option value="me">me</option>
                            <option value="UnI">UnI</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputCategory">분류(객체)</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputCategory"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Select aria-label="Category" name="category" onChange={(e) => setCategory(e.target.value)}>
                            <option>Category?</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputAsset">결제자산</Form.Label>
                        <Form.Select aria-label="Default select example" name="asset" onChange={(e) => setAsset(e.target.value)}>
                            <option>객체선택</option>
                            <option value="Cash">Cash</option>
                            <option value="bank">bank</option>
                            <option value="cradit card">cradit card</option>
                            <option value="add">add</option>
                        </Form.Select>

                        <Form.Label htmlFor="inputContents">상세 내용 거래내용 제목</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputContents"
                            onChange={(e) => setContents(e.target.value)}
                            aria-describedby="passwordHelpBlock"
                        />


                        <Form.Label htmlFor="inputMemo">메모</Form.Label>
                        <Form.Control
                            type="text"
                            id="inputMemo"
                            onChange={(e) => setMemo(e.target.value)}
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                        <Form>
                            <div className="mb-3" >
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Transfer"
                                    name="amountType"
                                    id="transfer"
                                    required
                                    onChange={(e) => setAmounttype("TRANSFER")}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Expenditure"
                                    name="amountType"
                                    id="expenditure"
                                    required
                                    defaultChecked
                                    onChange={(e) => setAmounttype("EXPENSE")}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Income"
                                    name="amountType"
                                    id="income"
                                    required
                                    onChange={(e) => setAmounttype("INCOME")}
                                />
                            </div>
                        </Form>
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button variant="secondary" onClick={handleSaveChanges}>Save changes</Button>
                            <Button variant="outline-secondary" onClick={() => navigate('/')}>Cancel</Button>
                        </Stack>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default Insertdata;
/*
<FloatingLabel controlId="floatingSelect" label=" 가계부 이름 ">
<Form.Select aria-label="Floating label select example"
    onChange={handleSelectBookName} // onChange 이벤트 핸들러 설정
    value={selectedBookName} // 선택된 값을 Form.Select의 값으로 설정
>
    {LoggedInInfo.bookNames && LoggedInInfo.bookNames.map((bookName: any, index: any) => (
        <option value={index}>{bookName}</option>
    ))}
</Form.Select>
</FloatingLabel>*/