import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUserId");
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const user = userData.find((user) => user.id === loggedIn);
    setLoggedInUser(user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserId");
    navigate("/Home");
  };
  console.log(loggedInUser);

  return (
    <>
      <Header />
      <div className="containerInDashboard">
        {loggedInUser ? (
          <div>
            {" "}
            <h2>Your INFO</h2>
            <p>First Name:{loggedInUser.firstName}</p>
            <p> Last Name:{loggedInUser.lastName}</p>
            <p>Email:{loggedInUser.email}</p>
          </div>
        ) : (
          <h2>Sorry No information found!!</h2>
        )}
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default UserInfo;
