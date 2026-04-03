// bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";

// components
import Footer from "../components/Footer";
import Forms from "../components/Forms";
import PriceList from "../components/PriceList";
import Services from "../components/Services";

export default function LandingPage() {
  return (
    <>
      <section className="hero justify-content-center d-flex flex-column">
        <Container className="hero-content">
          <Row>
            <Col md={5}>
              <h1 className="text-white fw-bold display-3">
                Szolnoki Fitness Terem
              </h1>
              <p className="text-white">
                Szolnok legjobban felszerelt konditerme. Nálunk nem csak egy
                termet kapsz hanem értékeket.
              </p>
              <div className="d-flex gap-3">
                <Button href="#services" variant="danger">
                  Szolgáltatások
                </Button>
                <Button href="#contact" variant="outline-danger">
                  Kapcsolat
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <PriceList />
      <Forms />
      <Footer />
    </>
  );
}
