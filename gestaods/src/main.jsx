import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
import { PatientsProvider } from "./Context/PatientsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientsProvider>
        <ChakraProvider>
          <GlobalStyles />
          <App />
        </ChakraProvider>
      </PatientsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
