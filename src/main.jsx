import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

// context
import { FitnessContextProvider } from "./context/FitnessContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FitnessContextProvider>
      <App />
    </FitnessContextProvider>
  </StrictMode>,
);
