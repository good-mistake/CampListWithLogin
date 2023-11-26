import React from "react";
import { useState } from "react";
const EditProfile = ({ user, save, cancel }) => {
  const [editUser, setEditUser] = useState({ ...user });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    save(editUser);
  };
  const handleUpdate = () => {
    const loggedIn = localStorage.getItem("loggedInUserId");
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = userData.findIndex((user) => user.id === loggedIn);
    if (userIndex !== -1) {
      userData[userIndex] = {
        ...userData[userIndex],
        ...editUser,
        id: loggedIn,
      };
      localStorage.setItem("users", JSON.stringify(userData));
    }
  };
  return (
    <>
      <h2>EditProfile</h2>
      <form onSubmit={onSubmit}>
        <div className="">
          <label htmlFor="firstName" className="">
            First Name
          </label>
          <div className="">
            <input
              value={editUser.firstName}
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="lastName" className="">
            Last Name
          </label>
          <div className="">
            <input
              value={editUser.lastName}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="">
          <label htmlFor="email">Email</label>
          <div className="">
            <input
              value={editUser.email}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="">
          <label htmlFor="userName" className="">
            User Name
          </label>
          <div className="">
            <input
              value={editUser.userName}
              type="text"
              id="userName"
              name="userName"
              placeholder="User Name"
              onChange={handleChange}
            />
          </div>
        </div>{" "}
        <div className="">
          <label htmlFor="password" className="">
            Password
          </label>
          <div className="">
            <input
              value={editUser.password}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" onClick={handleUpdate}>
          {" "}
          Submit Changes
        </button>
        <button onClick={cancel}>Cancel</button>
      </form>
    </>
  );
};

export default EditProfile;
