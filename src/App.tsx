import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";
import { THEME } from "./common";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
