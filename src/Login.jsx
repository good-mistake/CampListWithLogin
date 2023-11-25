import React from "react";
import Header from "./Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = ({ onLoging }) => {
  const [loginUser, setLoginUser] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [unsuccessful, setUnsuccessful] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("users")) || [];
    const check = data.find(
      (user) => user.userName === loginUser && user.password === loginPassword
    );

    if (check) {
      localStorage.setItem("loggedInUserId", check.id);
      navigate("/UserInfo");
      setUnsuccessful("Success");
    } else {
      setUnsuccessful("Invalid Username or Password");
      setLoginPassword("");
      setLoginUser("");
      return;
    }
  };

  return (
    <>
      <Header />
      <div className="loginFormContainer">
        <form action="" className="form-row loginForm">
          <div>{unsuccessful}</div>
          <label htmlFor="userName">UserName</label>
          <input
            value={loginUser}
            type="text"
            id="userName"
            placeholder="Username"
            onChange={(e) => {
              setLoginUser(e.target.value);
            }}
          />
          <label htmlFor="password">Password</label>
          <input
            value={loginPassword}
            type="text"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
          />
          <button
            className="btn btn-outline-info"
            onClick={(e) => handleLogin(e)}
          >
            Login
          </button>
          <ul>
            <li>
              <a href="">forgot password</a>
            </li>
            <li>
              <a href="/CreateAccount">Create Account</a>
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Login;
