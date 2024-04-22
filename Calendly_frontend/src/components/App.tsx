import React from "react";
import "../assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Login.tsx";
import Home from "../Pages/Home.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/components/theme-provider";

const App: React.FC = () => {
  return (
    <>
      <ChakraProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route index element={<Home />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
