import React from "react";
import "./css/Navbar.css";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  return (
    <div className="navbar__top">
      <div className="container">
        <div className="row text-white">
          <div className="col-12 ">
            <h4 className="navbar__head">
              <Link
                to="/"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                <SearchIcon />
                findImage
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
