// bootstrap
import { Button, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <footer className="darkbg">
        <Container className="d-flex justify-content-between py-3 align-items-center">
          <p className="text-white m-0">Copyright © Szolnoki Fitness Terem</p>
          <div className="d-flex gap-2">
            <Button
              href="https://www.facebook.com/powergymszolnok"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
              className="bi bi-facebook rounded-circle"
            ></Button>
            <Button
              href="https://www.instagram.com/powergym_szolnok"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
              className="bi bi-instagram rounded-circle"
            ></Button>
            <Button
              href="https://www.tiktok.com/@power_gym_fitness"
              target="_blank"
              rel="noopener noreferrer"
              variant="danger"
              className="bi bi-tiktok rounded-circle"
            ></Button>
          </div>
        </Container>
      </footer>
    </>
  );
}
