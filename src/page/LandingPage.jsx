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
      <Services />
      <Container id="about" className="pt-3 pb-5 mt-3 mb-5">
        <h2 className="fw-bold display-6 mb-5 text-center">Rólunk</h2>
        <p className="text-muted">
          Termünk alapítása óta egyetlen célt követünk: segíteni mindenkit
          abban, hogy megtalálja a saját útját az egészséges életmódhoz. Nem
          hiszünk a "egy méret mindenkinek" megközelítésben legyen szó teljesen
          kezdő látogatóról vagy évek óta edző versenyzőről, nálunk mindenki
          személyre szabott figyelmet és szakmai támogatást kap.
        </p>
        <p className="text-muted">
          Csapatunkat képzett és tapasztalt edzők alkotják, akik nem csupán a
          technikai tudásukat osztják meg veled, hanem valódi motivációt és
          odafigyelést is nyújtanak minden egyes edzés során. Fontosnak tartjuk,
          hogy ne csak elérd a céljaidat, hanem hosszú távon is fenntartható,
          élvezetes szokásokat építs ki.
        </p>
        <p className="text-muted">
          Termünk modern, jól felszerelt eszközparkkal rendelkezik, amely
          lehetővé teszi az erőnléti edzéstől kezdve a kardió és funkcionális
          mozgásformákig szinte mindenféle edzéstípus kivitelezését.
          Rendszeresen frissítjük eszközeinket, hogy mindig a legjobb élményt
          nyújthassuk tagjainknak.
        </p>
        <p className="text-muted">
          Emellett kiemelten fontosnak tartjuk a közösségi élményt is. Számos
          csoportos edzést, kihívást és rendezvényt szervezünk, ahol a tagok
          egymást motiválva, közösen érhetik el céljaikat. Hiszünk abban, hogy a
          fejlődés sokkal könnyebb, ha nem egyedül járod végig az utat.
        </p>
        <p className="text-muted">
          Csatlakozz hozzánk, és tapasztald meg, milyen érzés egy olyan közösség
          részének lenni, ahol minden apró előrelépésed számít, és ahol a
          céljaid elérése közös ügyünk.
        </p>
      </Container>
      <PriceList />
      <Faq />
      <Forms />
      <Footer />
    </>
  );
}
