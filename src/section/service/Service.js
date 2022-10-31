import React from "react";
import "../service/serviceStyle.css";
import tech from "./Technoloy";

export default function Service() {
  return (
    <div className="service-section">
      <div className="service-contnr">
        <div className="service-title">
          <p>SERVICES</p>
        </div>

        <div className="service-title-line"></div>

        <div className="service-detail">
          <h2>
            We engineer unique solutions to solve our customer's challenges.
          </h2>
        </div>
      </div>
      <div className="tech-contnr">
        {tech.map((data, index) => {
          return (
            <div key={index} className="tech-group">
              <p>{data.title}</p>
              <div className="tech-line"></div>
              <ul className="tech-detail">
                {data.detail.map((detailVal, index) => {
                  return (
                    <li key={index} className="tech-list">
                      {detailVal}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
