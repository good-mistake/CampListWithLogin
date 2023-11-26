import React from "react";
import Header from "./Header";
import { useState } from "react";
const CreateAccount = ({ onCreate }) => {
  const [user, setUser] = useState({
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
  const onChange = (e) => {
    const { name, value } = e.target;
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
