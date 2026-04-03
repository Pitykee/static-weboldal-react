// bootstrap
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
} from "react-bootstrap";

// components
import { cardItems } from "./cards";

export default function PriceList() {
  return (
    <div className="darkbg">
      <Container className="padding-custom">
        <Row>
          <h2 className="text-center text-white mb-5 fw-bold display-6">
            Árlista
          </h2>
          {cardItems.priceItems.map((item) => (
            <Col md={4} key={item.id} className="mb-4">
              <Card className="rounded-4 text-center">
                <CardBody className="rounded-4 py-5 px-4 gap-3 d-flex flex-column">
                  <CardTitle className="fw-bold fs-3">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 fs-5">
                    {item.price} Ft
                  </CardSubtitle>
                  <CardText>{item.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
