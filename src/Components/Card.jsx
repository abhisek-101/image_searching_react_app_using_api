import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./css/Card.css";

const Card = ({ image, thumb }) => {
  return (
    <div className="card shadow-sm p-2 m-auto mb-3">
      <div className="card-text">
        <a href={image} download="image.jpg" target="_blank">
          <img className="img-fluid" src={thumb} alt="walla" />
        </a>
      </div>
    </div>
  );
};

export default Card;
