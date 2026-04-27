// bootstrap
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="md" variant="dark" className="bg-dark sticky-top py-3">
      <Container>
        <Navbar.Brand href="#hero">
          <h4 className="m-0 text-white">Fitness Logo</h4>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto align-items-center gap-2 mt-md-0">
            <Nav.Link href="#services" className="text-white">
              Szolgáltatások
            </Nav.Link>
            <Nav.Link href="#pricelist" className="text-white">
              Árlista
            </Nav.Link>
            <Button href="#contact" className="border-0 px-4" variant="danger">
              Próba edzés
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Navigation;
