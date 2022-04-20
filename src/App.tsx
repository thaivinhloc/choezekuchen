import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { THEME } from "./common";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AppProvider } from "./context/app/AppProvider";
import { AuthProvider } from "./context/auth/AuthProvider";
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
        <AppProvider>
          <AuthProvider>
            <Header />
            <div className="container ">
              <div className="content">
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
            </div>
            <Footer />
          </AuthProvider>
        </AppProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
