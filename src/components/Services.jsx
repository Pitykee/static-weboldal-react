// bootstrap
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";

// components
import { cardItems } from "./cards";

export default function Services() {
  return (
    <Container id="services" className="padding-custom">
      <Row>
        <h2 className="text-center mb-5 fw-bold display-6">Szolgáltatások</h2>
        {cardItems.serviceItems.map((item) => (
          <Col md={4} key={item.id} className="mb-4 d-flex">
            <Card className="shadow rounded-4 w-100 h-100">
              <CardBody className="darkbg rounded-4 py-5 px-4 gap-3 d-flex flex-column">
                <CardTitle className="text-white fw-bold fs-3">
                  {item.name}
                </CardTitle>
                <CardText className="text-white">{item.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
