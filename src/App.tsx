import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global.style";
import { THEME } from "./common";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import Home from "./pages/Home";
import Retreat from "./pages/Retreat";
import { AuthProvider } from "./context/AuthProvider";
import HeaderProfileDropdown from "./components/Header/HeaderProfileDropdown";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/retreat" element={<Retreat />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
