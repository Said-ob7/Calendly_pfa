import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

// Render the App component using ReactDOM.render
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
