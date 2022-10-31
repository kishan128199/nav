import React from "react";
import "../capacity/capacityStyle.css";
import AccordionEffect from "../../componant/accordian/AccordionEffect";

export default function Capacity() {
  return (
    <div className="capacity-section">
      <div className="capacity-heading-contnr">
        <h2>CAPABILITIES</h2>
        <div></div>
        <p>Elite one stop shop for software execution. </p>
      </div>
      <div className="capacity-img-accordion-contnr">
        <div className="capacity-img-contnr">
          <img src={require(`../../img/image-2.png`)} alt="" />
        </div>
        <div className="accordion-contnr">
          <div className="accordion-title">
            Our world-class experts provide inovation,transparency,and
            cost-effective solutions
          </div>
          <AccordionEffect />
        </div>
      </div>
    </div>
  );
}
