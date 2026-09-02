import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <App pathname={window.location.pathname} />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
