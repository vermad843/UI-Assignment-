import React from "react";
import like from "../assets/like.svg";
import chat from "../assets/chat.svg";
import rate from "../assets/rate.svg";
import meds from "../assets/medss.svg";
export default function Navbar({ value, index }) {
  return (
    <div className="div-card-item">
      <div className="card-image-cont">
        <img src={meds} alt="item-images" />
      </div>
      <div className="card-main">
        <div className="item-name">
          {value} &nbsp; {index}
        </div>
        <div className="item-vendor">
          <span className="by-typo">By &nbsp;</span>
          Global X Change
        </div>
        <div className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, connect
          <span className="read-more">&nbsp;Read More</span>
        </div>
        <div className="item-rating">
          {[1, 2, 3, 4, 5].map((s) => (
            <img src={rate} alt="rate" className="rate-icon" />
          ))}
        </div>
        <div className="item-rate-icon">
          <div>
            <span className="item-price">$5.31</span>
            <span className="currency">USD</span>
          </div>
          <div>
            <img src={like} alt="like" className="item-icons" />
            <img src={chat} alt="chat" className="item-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}
