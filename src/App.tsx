import React from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderV1 from "./components/HeaderV1";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/index.style";
import { THEME } from "./common";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <HeaderV1 />
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
