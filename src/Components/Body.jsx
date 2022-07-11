import React from "react";
import "./css/Body.css";

import img1 from "../img/1.png";
import img2 from "../img/2.png";
import img3 from "../img/3.png";
const Body = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center d-flex align-items-stretch">
        <div className=" col-sm-6 col-md-4 mb-3">
          <div className="card m-auto h-100">
            <img src={img1} alt="" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">SEARCH IMAGE</h4>
              <div className="card-text">
                Non copyright © images are waiting for you. Feel free 🆓 to
                search 🔎 any keyword 😇
              </div>
            </div>
          </div>
        </div>
        <div className=" col-sm-6 col-md-4 mb-3">
          <div className="card m-auto ">
            <img src={img2} alt="" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">QUALITY IMAGES</h4>
              <div className="card-text">
                High ⚡ quality raw images are available. All high quality
                images 🖼 at one place🛐.
              </div>
            </div>
          </div>
        </div>
        <div className=" col-sm-6 col-md-4 mb-3">
          <div className="card m-auto">
            <img src={img3} alt="" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">VARIETY</h4>
              <div className="card-text">
                Varieties of images available for your project, background
                image, walpaper, etc.🙌😍
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
