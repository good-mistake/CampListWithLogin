import { Link } from "react-router-dom";
import React from "react";
function Header() {
  const loggedInUserId = localStorage.getItem("loggedInUserId");
  return (
    <>
      <div className="headerContainer">
        <div className="h1">
          <h1>Start Your Journey</h1>
        </div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>{" "}
                <li className="nav-item">
                  <a className="nav-link" href="/CampList">
                    Camp Lists
                  </a>
                </li>{" "}
                <div className="nav-item">
                  {loggedInUserId ? (
                    <li>
                      <a className="nav-link" href="/UserInfo">
                        Dashboard
                      </a>
                    </li>
                  ) : (
                    <a className="nav-link" href="/Login">
                      Login
                    </a>
                  )}
                </div>
              </ul>
            </div>
          </div>{" "}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    </>
  );
}

export default Header;
