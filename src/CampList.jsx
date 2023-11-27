import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const CampList = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://developer.nps.gov/api/v1/campgrounds?api_key=Lcp9vGjaQDhqdWrDLHpgycWcdg6m5dzjoy6YS6Vy"
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const datas = await res.json();
        // const dataArray = datas.data || [];
        setData(datas.data);
      } catch (e) {
        console.log("You had this error on fetchin data:", e);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const campList = JSON.parse(localStorage.getItem("newCampList")) || [];

    setUserData(
      campList.map((e) => {
        return e;
      })
    );
  }, []);

  return (
    <>
      <Header />
      <div className="card-container">
        {data || userData
          ? [...userData, ...data].map((e) => {
              // console.log(e);
              return (
                <div key={e.id} className="card">
                  {e.images && e.images.length > 0 ? (
                    <img
                      src={e.images[0].url || e.images}
                      alt=""
                      className="card-img"
                    />
                  ) : (
                    "no image found"
                  )}
                  <div className="card-body">
                    <h5 className="">{e.name}</h5>
                    <p className="description">
                      {e.description.length > 100
                        ? e.description.substring(0, 200)
                        : e.description}
                      ...
                    </p>

                    <div className="fee">
                      Price: {e.fees[0]?.cost || "No fees Found"}$
                      <Link
                        to={`/campItem/${e.id}`}
                        className="btn btn-primary"
                        key={e.id}
                      >
                        Click to see more
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default CampList;
