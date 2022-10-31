import React, { useState } from "react";
import Accordion from "./Accordion";
import AccordionData from "./AccordionData";
export default function AccordionEffect() {
  const [clicked, setClicked] = useState("0");
  let [height, setHeight] = useState("0");

  const handleToggle = async (e, index) => {
    setHeight(e.target.clientWidth);

    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {AccordionData.map((data, index) => (
        <Accordion
          onToggle={(e) => handleToggle(e, index)}
          active={clicked === index}
          key={index}
          AccordionData={data}
          elHeight={height}
        />
      ))}
    </ul>
  );
}
