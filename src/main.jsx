import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./components/Card.css"; // глобально підключаємо стилі (можна тут або в App/BlogCard)

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
