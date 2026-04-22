import {} from "react";
import "./App.css";

// bootstrap
import {} from "react-bootstrap";

// page
import LandingPage from "./page/LandingPage";

// components
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <LandingPage />
    </>
  );
}

export default App;
