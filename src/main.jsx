import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ItemsContextProvider } from "./context/itemsContext";
import { CartContextProvider } from "./context/cartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <CartContextProvider>
        <Router>
          <App />
        </Router>
      </CartContextProvider>
    </ItemsContextProvider>
  </React.StrictMode>
);
