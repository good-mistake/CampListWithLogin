import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const CampListItem = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  const [changeImg, setChangeImg] = useState(0);
  // const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const campList = JSON.parse(localStorage.getItem("newCampList")) || [];

      const userData = campList.find((e) => e.id === id);
      console.log(userData.address.city);
      try {
        const res = await fetch(
          "https://developer.nps.gov/api/v1/campgrounds?api_key=Lcp9vGjaQDhqdWrDLHpgycWcdg6m5dzjoy6YS6Vy"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const datas = await res.json();
        const idData = datas.data.find((e) => e.id === id);
        setData({
          ...idData,
          ...userData,
        });
      } catch (e) {
        console.log("You had this error on fetchin data:", e);
      }
    };
    fetchData();
  }, [id]);

  const onPrevImg = () => {
    setChangeImg((prev) => (prev < data.images.length - 1 ? prev + 1 : 0));
  };
  const onNextImg = () => {
    setChangeImg((next) => (next > 0 ? next - 1 : data.images.length - 1));
  };
  // useEffect(() => {
  //   const campList = JSON.parse(localStorage.getItem("newCampList")) || [];

  //   const datas = campList.map((e) => {
  //     return e;
  //   });
  //   const idData = datas.find((e) => e.id === id);
  //   setData(idData);
  // }, []);
  return (
    <>
      <Header />

      <div className="campItemContainer">
        {data ? (
          <div className="carousel-slider">
            <div class="carousel-inner">
              <div class="carousel-item active">
                {data.images ? (
                  <img
                    src={data.images[changeImg].url || data.images}
                    alt="Nothing Found"
                    className="d-block w-100 campItemImg"
                  ></img>
                ) : (
                  "image not found"
                )}
                <button
                  onClick={onPrevImg}
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  {" "}
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  onClick={onNextImg}
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  {" "}
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>{" "}
              </div>
            </div>{" "}
            <h2 className="campName">{data.name}</h2>
            <p className="campDescription">{data.description}</p>
            <div className="campInfo">
              <ul>
                {data.addresses || data.address ? (
                  <li>
                    Address:{" "}
                    {`${data.address?.city || data.addresses[0]?.city},
  ${data.address?.line1 || data.addresses[0]?.line1},
  ${data.address?.postalCode || data.addresses[0]?.postalCode},
  ${data.address?.stateCode || data.addresses[0]?.stateCode}`}
                  </li>
                ) : (
                  "No address"
                )}

                <li>Camp site: {data.campsites?.totalSites}</li>
                <li>Electrical hookups: {data.campsites?.electricalHookups}</li>

                {data.amenities ? (
                  <>
                    {" "}
                    <li>Camp Store: {data.amenities.campStore}</li>
                    <li>
                      Fire Wood for sale: {data.amenities.firewoodForSale}
                    </li>
                    {data.amenities.toilets ? (
                      <li> Toilets: {data.amenities.toilets[0]}</li>
                    ) : (
                      "No bathroom"
                    )}
                    <li>Shower: {data.amenities.showers}</li>
                    <li>
                      Recycling: {data.amenities.trashRecyclingCollection}
                    </li>
                    <li>Food Storage: {data.amenities.foodStorageLockers}</li>{" "}
                    <li>Internet: {data.amenities.internetConnectivity}</li>{" "}
                    <li>
                      Cellphone reception: {data.amenities.cellPhoneReception}
                    </li>{" "}
                    <li>Laundry: {data.amenities.laundry}</li>
                  </>
                ) : (
                  "No Amenities found"
                )}
              </ul>{" "}
              <div>{data.regulationsOverview}</div>
            </div>{" "}
            <div className="reservation">
              {" "}
              <div>{data.fees[0]?.title}</div>
              <div>Price: {data.fees[0]?.cost}$</div>
              <div className="feeDesxription">{data.fees[0]?.description}</div>
              <div>{data.reservationInfo}</div>{" "}
              <div>{data.weatherOverview}</div>
              <Link
                to={data.reservationUrl}
                className="btn btn-success reservationBtn"
              >
                Click here to reserve
              </Link>
            </div>
          </div>
        ) : (
          "No Data Found!!!"
        )}
      </div>
    </>
  );
};

export default CampListItem;
