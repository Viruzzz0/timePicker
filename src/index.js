import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { InputProvider } from "./context/inputManager";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <InputProvider>
    <App />
  </InputProvider>
);
