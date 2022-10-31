import React from "react";
import { useState } from "react";
import Banner from "../section/banner/Banner";
import Capacity from "../section/capacity/Capacity";
import Product from "../section/product/Product";
import Service from "../section/service/Service";

export default function Home() {
  let [suffleValue, setSuffleValue] = useState(true);
  setInterval(() => {
    if (suffleValue) {
      setSuffleValue(false);
    } else {
      setSuffleValue(true);
    }
  }, 10000);
  let width = window.screen.width;
  let myStyle = {
    width: "100%",
    maxWidth: `${width}px`,
  };
  return (
    <div className="home" id="home" style={myStyle}>
      <Banner />
      <Capacity />
      <Service />
      <Product />
    </div>
  );
}
