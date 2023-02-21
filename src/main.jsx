import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "../config.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientid}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
