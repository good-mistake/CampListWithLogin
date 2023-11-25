import React from "react";
import { useState, useEffect } from "react";
const CampList = () => {
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
        console.log(datas);
      } catch (e) {
        console.log("You had this error on fetchin data:", e);
      }
    };
    fetchData();
  }, []);
  return <div>CampList</div>;
};

export default CampList;
