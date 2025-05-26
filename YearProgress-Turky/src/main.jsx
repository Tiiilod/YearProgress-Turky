import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Project/Index";
import Index from "./Project/Index";
import App1 from "./Project/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);