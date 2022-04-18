import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "./common";
import Footer from "./components/Footer";
import HeaderV1 from "./components/HeaderV1";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile";
import Retreat from "./pages/Retreat";
import SignUp from "./pages/SignUp/Signup";
import { GlobalStyle } from "./styles/global.style";
import { Layout, Row } from "antd";

const { Content } = Layout;
function App() {
  return (
    <Router>
      <ThemeProvider theme={THEME}>
        <GlobalStyle />
        <AuthProvider>
          <HeaderV1 />
          <div className="container">
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route path="/" element={<Retreat />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/retreat" element={<Retreat />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
