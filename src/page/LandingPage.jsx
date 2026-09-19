// bootstrap
import { Button, Col, Container, Row } from "react-bootstrap";

// components
import Forms from "../components/Forms";
import PriceList from "../components/PriceList";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Faq from "../components/Faq";

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
                  Kérdésed van?
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container id="why-us" className="py-5 my-5">
        <h2 className="fw-bold display-6 mb-5 text-center">
          Miért minket válassz
        </h2>
        <Row className="g-4">
          <Col md={6} lg={3}>
            <div className="text-center h-100 p-4 about-card">
              <i className="bi bi-people-fill fs-1 text-danger mb-3 d-block"></i>
              <h5 className="fw-bold">Tapasztalt csapat</h5>
              <p className="text-muted small mb-0">
                Képzett edzőink nem csak technikai tudást, hanem valódi
                motivációt és odafigyelést is adnak minden edzésen.
              </p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="text-center h-100 p-4 about-card">
              <i className="bi bi-gear-fill fs-1 text-danger mb-3 d-block"></i>
              <h5 className="fw-bold">Modern eszközök</h5>
              <p className="text-muted small mb-0">
                Jól felszerelt eszközparkunk erőnléti, kardió és funkcionális
                edzéshez egyaránt, folyamatosan frissítve.
              </p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="text-center h-100 p-4 about-card">
              <i className="bi bi-heart-fill fs-1 text-danger mb-3 d-block"></i>
              <h5 className="fw-bold">Közösségi élmény</h5>
              <p className="text-muted small mb-0">
                Csoportos edzések, kihívások és rendezvények, ahol a tagok
                együtt érik el céljaikat.
              </p>
            </div>
          </Col>

          <Col md={6} lg={3}>
            <div className="text-center h-100 p-4 about-card">
              <i className="bi bi-trophy-fill fs-1 text-danger mb-3 d-block"></i>
              <h5 className="fw-bold">Fenntartható fejlődés</h5>
              <p className="text-muted small mb-0">
                Nem csak a célod elérésében segítünk, hanem abban is, hogy
                hosszú távon élvezetes szokásokat építs ki.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Services />

      <Container id="about" className="py-5 my-5">
        <Row className="align-items-center g-5">
          <Col md={6}>
            <h2 className="fw-bold display-6 mb-5">Rólunk</h2>
            <p className="text-muted">
              Termünk alapítása óta egyetlen célt követünk. Segíteni mindenkit
              abban, hogy megtalálja a saját útját az egészséges életmódhoz. Nem
              hiszünk az "egy méret mindenkinek" megközelítésben, nálunk
              mindenki személyre szabott figyelmet és szakmai támogatást kap.
            </p>
            <p className="text-muted mb-0">
              Csapatunkat képzett és tapasztalt edzők alkotják, akik nem csupán
              a technikai tudásukat osztják meg veled, hanem valódi motivációt
              és odafigyelést is nyújtanak minden edzés során.
            </p>
          </Col>
          <Col md={6}>
            <img
              src="../src/assets/terem.jpg"
              alt="Edzőterem belső tere"
              className="img-fluid rounded-5 shadow-sm"
            />
          </Col>
        </Row>
      </Container>

      <PriceList />
      <Faq />
      <Forms />
      <Footer />
    </>
  );
}
