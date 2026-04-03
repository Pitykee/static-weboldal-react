import { useState } from "react";

// bootstrap
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

export default function Forms() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0)
      return setErrors(validationErrors);

    setErrors({});
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "A név megadása kötelező!";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Az email megadása kötelező!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Hibás email formátum!";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Az üzenet nem lehet üres!";
    }

    return newErrors;
  };

  return (
    <Container id="contact" className="padding-custom">
      <Row className="justify-content-center">
        <h2 className="text-center mb-5 fw-bold display-6">
          Kérdésed van? Írj nekünk!
        </h2>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
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
        </Col>
      </Row>
    </Container>
  );
}
