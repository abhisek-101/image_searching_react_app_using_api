import React from "react";
import "./css/Banner.css";

import Search from "./Search";
const Banner = () => {
  return (
    <div className="banner py-4 text-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="banner__info pt-2">
              <h2>We help you find any images</h2>
              <p className="mt-1">Search any images from any sites</p>
            </div>
          </div>
        </div>
      </div>
      <Search />
    </div>
  );
};

export default Banner;
