import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextProvider>
    <HashRouter>
      <App />
    </HashRouter>
    </AppContextProvider>
  </React.StrictMode>
)
