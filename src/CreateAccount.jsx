import React from "react";
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateAccount = ({ onCreate }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    profilePhoto: "",
    number: "",
    address: "",
    firstName: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  //   const onChange = (e) => {
  //     const { name, value } = e.target;
  //     setUser((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };
  const onChange = (name, value) => {
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const handleFirstNameChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     firstName: e.target.value,
  //   }));
  // };
  // const handleEmailChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     email: e.target.value,
  //   }));
  // };
  // const handleUserNameChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     userName: e.target.value,
  //   }));
  // };
  // const handlePasswordChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     password: e.target.value,
  //   }));
  // };
  // const handleLastNameChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     lastName: e.target.value,
  //   }));
  // };
  // const handleConfirmPasswordChange = (e) => {
  //   setUser((prev) => ({
  //     ...prev,
  //     confirmPassword: e.target.value,
  //   }));
  // };
  const handleCreate = (e) => {
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (user.password !== user.confirmPassword) {
      alert("Your password doesnt match");
      return;
    }
    // const isUserExist = existingUsers.some(
    //   (existingUser) =>
    //     existingUser.userName === user.userName ||
    //     existingUser.email === user.email
    // );

    // if (isUserExist) {
    //   alert("Username or email is already taken");
    //   return;
    // }
    const userId = Math.random().toString(36).substr(2, 9);
    existingUsers.push({ id: userId, ...user });
    localStorage.setItem("users", JSON.stringify(existingUsers));
    onCreate();
    nav("/");
  };
  return (
    <>
      <Header />
      <div className="createAccountContainer">
        <form onSubmit={handleCreate} className="createAccountForm">
          <div className="">
            <label htmlFor="firstName" className="">
              First Name
            </label>
            <div className="">
              <input
                value={user.firstName}
                type="text"
                id="firstName"
                placeholder="First Name"
                onChange={(e) => onChange("firstName", e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="lastName" className="">
              Last Name
            </label>
            <div className="">
              <input
                value={user.lastName}
                type="text"
                id="lastName"
                placeholder="Last Name"
                onChange={(e) => onChange("lastName", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="Email">Email</label>
            <div className="">
              <input
                value={user.email}
                type="email"
                id="Email"
                placeholder="Email"
                onChange={(e) => onChange("email", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="Number">Number</label>
            <div className="">
              <input
                value={user.number}
                type="number"
                id="Number"
                placeholder="Number"
                onChange={(e) => onChange("number", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="Address">Address</label>
            <div className="">
              <input
                value={user.address}
                type="text"
                id="Address"
                placeholder="Address"
                onChange={(e) => onChange("address", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="profilePhoto">Profile Photo URl:</label>
            <div className="">
              <input
                value={user.profilePhoto}
                type="profilePhoto"
                id="profilePhoto"
                placeholder="Profile Photo"
                onChange={(e) => onChange("profilePhoto", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="userName" className="">
              User Name
            </label>
            <div className="">
              <input
                value={user.userName}
                type="text"
                id="userName"
                placeholder="User Name"
                onChange={(e) => onChange("userName", e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="">
            <label htmlFor="inputPassword3" className="">
              Password
            </label>
            <div className="">
              <input
                value={user.password}
                type="password"
                id="inputPassword3"
                placeholder="Password"
                onChange={(e) => onChange("password", e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="confirmedPassword" className="">
              Confirm Password
            </label>
            <div className="">
              <input
                value={user.confirmPassword}
                type="password"
                id="confirmedPassword"
                placeholder="Confirm Password"
                onChange={(e) => onChange("confirmPassword", e.target.value)}
              />
            </div>
          </div>
          <button className="btn btn-success submitBtn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateAccount;
