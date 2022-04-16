import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DivHomeWrapper } from "./index.style";

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = !!localStorage.getItem("token");
    if (token) navigate("/retreat");
  }, []);

  return <DivHomeWrapper />;
};

export default Home;
