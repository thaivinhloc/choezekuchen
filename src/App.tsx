import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "./common";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeaderV1 from "./components/HeaderV1";
import { AuthProvider } from "./context/AuthProvider";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import Retreat from "./pages/Retreat";
import SignUp from "./pages/SignUp/Signup";
import { GlobalStyle } from "./styles/global.style";

function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <AuthProvider>
          <HeaderV1 />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/retreat" element={<Retreat />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
