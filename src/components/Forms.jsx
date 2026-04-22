import { useContext, useState } from "react";

// bootstrap
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";

//context
import { FitnessContext } from "../context/FitnessContext";

export default function Forms() {
  const { formData, errors, handleChange, handleSubmit, validate } =
    useContext(FitnessContext);

  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) return;

    setSubmittedData(formData);
    handleSubmit();
    setShowModal(true);
  };

  return (
    <Container id="contact" className="padding-custom">
      <Row className="justify-content-center">
        <h2 className="text-center mb-5 fw-bold display-6">
          Kérdésed van? Írj nekünk!
        </h2>
        <Col md={6}>
          <Form onSubmit={submitHandler}>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
              <FormLabel>Név</FormLabel>
              <FormControl
                type="text"
                name="name"
                placeholder="Név"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                isInvalid={!!errors.name}
              />
              <FormControl.Feedback type="invalid">
                {errors.name}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput2">
              <FormLabel>Email cím</FormLabel>
              <FormControl
                type="email"
                name="email"
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                isInvalid={!!errors.email}
              />
              <FormControl.Feedback type="invalid">
                {errors.email}
              </FormControl.Feedback>
            </FormGroup>
            <FormGroup
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <FormLabel>Üzenet</FormLabel>
              <FormControl
                as="textarea"
                rows={3}
                name="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                isInvalid={!!errors.message}
              />
              <FormControl.Feedback type="invalid">
                {errors.message}
              </FormControl.Feedback>
            </FormGroup>
            <Button variant="danger" type="submit" className="w-100">
              Küldés
            </Button>
          </Form>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            centered
            className="border-0 shadow-lg"
          >
            <Modal.Header className="border-0 text-center">
              <Modal.Title>Ez egy teszt adat!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              Nincs valódi e-mail küldés de ezeket az adatokat továbbítottuk:
              <br />
              <br />
              <strong>Név: </strong>
              {submittedData?.name}
              <br />
              <strong>Email: </strong>
              {submittedData?.email}
              <br />
              <strong>Üzenet: </strong>
              {submittedData?.message}
            </Modal.Body>

            <Modal.Footer className="border-0 d-flex justify-content-center">
              <Button variant="danger" onClick={() => setShowModal(false)}>
                Rendben
              </Button>
            </Modal.Footer>
          </Modal>
        </Col>
      </Row>
    </Container>
  );
}
