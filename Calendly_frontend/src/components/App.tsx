import React from "react";
import "./App.css";
import Header from "./Header";
import reactLogo from "../assets/react.svg";
import AppContent from "./AppContent.tsx";

const App: React.FC = () => {
  return (
    <div>
      <Header logoSrc={reactLogo} pageTitle="Home Page" />
      <AppContent />
    </div>
  );
};

export default App;
