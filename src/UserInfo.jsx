import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
const UserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [data, setData] = useState({
    images: "",
    name: "",
    description: "",
    address: {
      city: "",
      line1: "",
      postalCode: "",
      stateCode: "",
    },
    amenities: {
      campStore: "",
      firewoodForSale: "",
      toilets: { 0: {} },
      trashRecyclingCollection: "",
      showers: "",
      foodStorageLockers: "",
      internetConnectivity: "",
      cellPhoneReception: "",
      laundry: "",
    },
    campsites: {
      totalSites: "",
      electricalHookups: "",
    },
    fees: {
      0: { title: "", cost: "", description: "" },
    },
    reservationInfo: "",
    reservationUrl: "",
    weatherOverview: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedInUserId");
    const userData = JSON.parse(localStorage.getItem("users")) || [];
    const user = userData.find((user) => user.id === loggedIn);
    setLoggedInUser(user);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserId");
    navigate("/");
  };
  const onEdit = () => {
    setEditUser(true);
  };
  const onSave = (e) => {
    setLoggedInUser(e);
    setEditUser(false);
  };
  const onCancel = () => {
    setEditUser(false);
  };
  return (
    <>
      <Header />
      <div className="containerInDashboard">
        {editUser ? (
          <EditProfile user={loggedInUser} save={onSave} cancel={onCancel} />
        ) : (
          <div>
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
            <button onClick={onEdit}>Edit Profile</button>
          </div>
        )}
        <button className="btn btn-outline-danger" onClick={handleLogout}>
          LogOut
        </button>
      </div>
    </>
  );
};

export default UserInfo;
