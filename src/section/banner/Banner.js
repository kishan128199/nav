import React from "react";
// import AccordionEffect from "../componant/accordian/AccordionEffect";
import TypingEffect from "../../componant/typingEffect/TypingEffect";

import "../banner/bannerStyle.css";
export default function Banner() {
  return (
    <div className="banner-contnr">
      <div className="banner-group">
        <div className="banner-moment">
          <h1>We're proud of our work.</h1>
        </div>
        <div className="banner-create">
          <h2>We Create</h2>
          <br />
          <TypingEffect />
        </div>
      </div>
      <div className="banner-img">
        <img
          src={require("C:/Users/kp990/Desktop/nav/src/img/banner-image.png")}
          alt=""
        />
      </div>
    </div>
  );
}
