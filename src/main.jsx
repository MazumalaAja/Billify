// =====> IMPORTS
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./app";
import "./styles/main.css";

// =====> MY-SETUP
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);