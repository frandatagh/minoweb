import React from "react";
import './Login.css';
import InfoMode from "./components/InfoMode/InfoMode";
import Title from "./components/title/Title";
import Formlogin from "./components/login-form/Formlogin";
import InfoBar from "./components/InfoBar/InfoBar";

const Login = () => {
  return <div>
    <InfoMode />
    <Title />
    <Formlogin />
    <InfoBar />
  </div>;
};

export default Login;
