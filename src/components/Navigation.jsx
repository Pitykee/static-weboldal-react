// bootstrap
import { Button, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="bg-dark text-white sticky-top">
      <Container className="py-3">
        <div className="d-flex justify-content-between align-items-center">
          <a className="m-0 text-decoration-none text-white" href="#hero">
            <h4>Fitness Logo</h4>
          </a>

          <ul className="list-unstyled d-flex gap-4 align-items-center m-0">
            <li>
              <a href="#services" className="text-white text-decoration-none">
                Szolgáltatások
              </a>
            </li>
            <li>
              <a href="#pricelist" className="text-white text-decoration-none">
                Árlista
              </a>
            </li>

            <Button href="#contact" className="border-0 px-4" variant="danger">
              Próba edzés
            </Button>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Navigation;
