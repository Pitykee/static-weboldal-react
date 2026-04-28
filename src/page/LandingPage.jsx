// bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";

// components
import Forms from "../components/Forms";
import PriceList from "../components/PriceList";
import Services from "../components/Services";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <section className="hero justify-content-center d-flex flex-column">
        <Container id="hero" className="hero-content">
          <Row>
            <Col md={6}>
              <h1 className="text-white fw-bold display-3">
                Érd el a legjobb formád
              </h1>
              <p className="text-white">
                Nem számít, hogy most kezded vagy már régóta edzel — nálunk
                minden edzés egy új lehetőség arra, hogy erősebb, fittebb és
                magabiztosabb legyél. Modern gépekkel, támogató közösséggel és
                személyi edzőkkel segítünk, hogy elérd a saját céljaidat, a
                saját tempódban.
              </p>
              <div className="d-flex gap-3">
                <Button href="#services" variant="danger">
                  Bérletek megtekintése
                </Button>
                <Button href="#contact" variant="outline-danger">
                  Időpont foglalás
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
