import React from "react";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";
const UserInfo = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [editUser, setEditUser] = useState(false);
  const [data, setData] = useState({
    id: Math.random().toString(36).substr(2, 9),
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
  const onChange = (name, value) => {
    // const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onClick = (e) => {
    e.preventDefault();
    const existingCampList =
      JSON.parse(localStorage.getItem("newCampList")) || [];
    const updatedCampList = [...existingCampList, data];

    localStorage.setItem("newCampList", JSON.stringify(updatedCampList));
    setData({
      id: Math.random().toString(36).substr(2, 9),
      images: "",
      name: "",
      description: "",
      address: {
        0: { city: "", line1: "", postalCode: "", stateCode: "" },
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
      regulationsOverview: "",
      reservationInfo: "",
      reservationUrl: "",
      weatherOverview: "",
    });
  };
  return (
    <>
      <Header />
      <div className="containerInDashboard">
        {editUser ? (
          <EditProfile user={loggedInUser} save={onSave} cancel={onCancel} />
        ) : (
          <div className="userInformation">
            {loggedInUser ? (
              <div>
                {" "}
                <h2>Your INFO</h2>
                <img src={loggedInUser.profilePhoto} alt="ProfilePhoto" />
                <p>First Name:{loggedInUser.firstName}</p>
                <p> Last Name:{loggedInUser.lastName}</p>
                <p>Email:{loggedInUser.email}</p>
                <p>Number:{loggedInUser.number}</p>
                <p>Address:{loggedInUser.address}</p>
              </div>
            ) : (
              <h2>Sorry No information found!!</h2>
            )}
            <button onClick={onEdit} className="btn btn-primary">
              Edit Profile
            </button>{" "}
            <button className="btn btn-outline-danger" onClick={handleLogout}>
              LogOut
            </button>
          </div>
        )}
        <div className="CreateCampList">
          <form action="" onSubmit={onClick} className="form-group">
            <h2>Put Your Camp Location</h2>
            <div>
              {" "}
              <label htmlFor="campName" className="form-label">
                Camp name
              </label>
              <input
                type="text"
                id="campName"
                value={data.name}
                onChange={(e) => onChange("name", e.target.value)}
                className="form-control"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="img1" className="form-label">
                Image Link 1
              </label>
              <input
                type="text"
                id="img1"
                value={data.images}
                onChange={(e) => onChange("images", e.target.value)}
                className="form-control"
              />
            </div>
            <div>
              {" "}
              <label className="form-label" htmlFor="campDescription">
                Description
              </label>
              <input
                className="form-control form-control-lg"
                type="text"
                id="campDescription"
                value={data.description}
                onChange={(e) => onChange("description", e.target.value)}
              />
            </div>
            <div>
              {" "}
              <label className="form-label" htmlFor="city">
                City
              </label>
              <input
                className="form-control"
                type="text"
                id="city"
                value={data.address.city}
                onChange={(e) =>
                  onChange("address", {
                    ...data.address,
                    city: e.target.value,
                  })
                }
              />
            </div>
            <div>
              {" "}
              <label className="form-label" htmlFor="line">
                Line
              </label>
              <input
                className="form-control"
                type="text"
                id="line"
                value={data.address.line1}
                onChange={(e) =>
                  onChange("address", {
                    ...data.address,
                    line1: e.target.value,
                  })
                }
              />
            </div>{" "}
            <div>
              {" "}
              <label className="form-label" htmlFor="postalCode">
                Postal Code
              </label>
              <input
                className="form-control"
                type="text"
                id="postalCode"
                value={data.address.postalCode}
                onChange={(e) =>
                  onChange("address", {
                    ...data.address,
                    postalCode: e.target.value,
                  })
                }
              />
            </div>
            <div>
              {" "}
              <label className="form-label" htmlFor="stateCode">
                State Code
              </label>
              <input
                type="text"
                id="stateCode"
                className="form-control"
                value={data.address.stateCode}
                onChange={(e) =>
                  onChange("address", {
                    ...data.address,
                    stateCode: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="campSite" className="form-label">
                Camp Sites
              </label>
              <input
                type="number"
                className="form-control"
                value={data.campsites.totalSites}
                id="campSite"
                onChange={(e) =>
                  onChange("campsites", {
                    ...data.campsites,
                    totalSites: e.target.value,
                  })
                }
              />{" "}
              <label className="form-label" htmlFor="electricity">
                Electricity
              </label>
              <input
                type="number"
                className="form-control"
                value={data.campsites.electricalHookups}
                id="electricity"
                onChange={(e) =>
                  onChange("campsites", {
                    ...data.campsites,
                    electricalHookups: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label className="form-label" htmlFor="price">
                Price
              </label>
              <input
                type="text"
                value={data && data.campsites && data.fees && data.fees[0].cost}
                id="price"
                className="form-control"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fees: {
                      0: {
                        ...prev.fees[0],
                        cost: e.target.value,
                      },
                    },
                  }))
                }
              />
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                value={
                  data && data.campsites && data.fees && data.fees[0].title
                }
                className="form-control"
                id="title"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fees: {
                      0: {
                        ...prev.fees[0],
                        title: e.target.value,
                      },
                    },
                  }))
                }
              />
              <label className="form-label" htmlFor="feeDescription">
                Fee Description
              </label>
              <input
                type="text"
                value={
                  data &&
                  data.campsites &&
                  data.fees &&
                  data.fees[0].description
                }
                id="feeDescription"
                className="form-control"
                onChange={(e) =>
                  setData((prev) => ({
                    ...prev,
                    fees: {
                      0: {
                        ...prev.fees[0],
                        description: e.target.value,
                      },
                    },
                  }))
                }
              />
            </div>
            <div>
              <label className="form-label" htmlFor="regulationsOverview">
                Regulations
              </label>
              <input
                type="text"
                value={data.regulationsOverview}
                id="regulationsOverview"
                onChange={(e) =>
                  onChange("regulationsOverview", e.target.value)
                }
                className="form-control"
              />
            </div>
            <div>
              <label className="form-label" htmlFor="reserveInfo">
                Reservation information
              </label>
              <input
                type="text"
                className="form-control"
                value={data.reservationInfo}
                id="reserveInfo"
                onChange={(e) => onChange("reservationInfo", e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" htmlFor="reserveUrl">
                Reservation Url
              </label>
              <input
                type="text"
                value={data.reservationUrl}
                className="form-control"
                id="reserveUrl"
                onChange={(e) => onChange("reservationUrl", e.target.value)}
              />
            </div>
            <label className="form-label" htmlFor="weather">
              Weather
            </label>
            <input
              type="text"
              value={data.weatherOverview}
              className="form-control"
              id="weather"
              onChange={(e) => onChange("weatherOverview", e.target.value)}
            />{" "}
            <div className="selectOptions mb-3">
              <label className="form-label" htmlFor="campStore">
                Camp Store
              </label>
              <select
                id="campStore"
                value={data.amenities.campStore}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    campStore: e.target.value,
                  })
                }
                name="campStore"
                className="form-select"
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="firewoodForSale">
                Fire Wood for sale
              </label>
              <select
                className="form-select"
                id="firwoodForSale"
                value={data.amenities.firewoodForSale}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    firewoodForSale: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="toilet">
                Tiolets
              </label>
              <select
                className="form-select"
                id="toilet"
                value={data.amenities.toilets}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    toilets: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="recycling">
                Recycling
              </label>
              <select
                className="form-select"
                id="recycling"
                value={data.amenities.trashRecyclingCollection}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    trashRecyclingCollection: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="showers">
                Showers
              </label>
              <select
                className="form-select"
                id="showers"
                value={data.amenities.showers}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    showers: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="foodStorage">
                Food Storage
              </label>
              <select
                className="form-select"
                id="foodStorage"
                value={data.amenities.foodStorageLockers}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    foodStorageLockers: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="internet">
                Internet
              </label>
              <select
                className="form-select"
                id="internet"
                value={data.amenities.internetConnectivity}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    internetConnectivity: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label className="form-label" htmlFor="reception">
                Reception
              </label>
              <select
                className="form-select"
                id="reception"
                value={data.amenities.cellPhoneReception}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    cellPhoneReception: e.target.value,
                  })
                }
              >
                <option value="">Select an option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
              <label htmlFor="laundry" className="form-label">
                Laundry
              </label>
              <select
                id="laundry"
                value={data.amenities.laundry}
                onChange={(e) =>
                  onChange("amenities", {
                    ...data.amenities,
                    laundry: e.target.value,
                  })
                }
                className="form-select"
              >
                <option value="">Select an option </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not Sure!!!">Not Sure!!!</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
