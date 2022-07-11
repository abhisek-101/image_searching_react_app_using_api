import React from "react";
import "./css/Footer.css";
const Footer = () => {
  return (
    <div className="footer py-3">
      <div className="container mt-2">
        <div className="row text-center">
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Contacts</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>Facebook</li>
                <li>Email</li>
                <li>Linked in</li>
                <li>Instagram</li>
                <li>Twitter</li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Services</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>Image</li>
                <li>Photos</li>
                <li>Videos in</li>
                <li>Free service</li>
                <li>Random</li>
                <li>Royalty free</li>
                <li>Best</li>
              </ul>
            </p>
          </div>
          <div className="col-sm-6 col-md-4 py-2">
            <h5 className="mb-2 h5">Offers</h5>
            <p>
              <ul className="mt-0 p-0">
                <li>Couple Offer</li>
                <li>No offer</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mb-3 ">
            <small>@copyright 2021,THE UNKNOWN LAB 🧪🥼</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
