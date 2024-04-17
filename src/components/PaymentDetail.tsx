import { Container,Form,Stack,Badge } from "react-bootstrap";
import api from "../api/axios";


function PaymentDetail(params:any) {
    


    return(
        <Container>
          <Form.Control type="text" placeholder="Normal text" />
          <Stack direction="horizontal" gap={2}>
            <Badge bg="primary">Primary</Badge>
            <Badge bg="secondary">Secondary</Badge>
            <Badge bg="success">Success</Badge>
            <Badge bg="danger">Danger</Badge>
            <Badge bg="warning" text="dark">
              Warning
            </Badge>
            <Badge bg="info">Info</Badge>
            <Badge bg="light" text="dark">
              Light
            </Badge>
            <Badge bg="dark">Dark</Badge>
          </Stack>
        </Container>
    )
}

export default PaymentDetail;