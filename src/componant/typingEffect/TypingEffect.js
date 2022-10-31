import React, { useEffect, useState } from "react";
import TypingData from "../typingEffect/TypingData";
import "../typingEffect/typingEffectStyle.css";

export default function TypingEffect(props) {
  let counter = 0;
  let index = 0;
  let content = TypingData;
  let [text, setText] = useState(content[index]);

  function type() {
    if (counter <= content[index].length) {
      setText(content[index].substring(0, counter++));

      setTimeout(type, 100);
    } else if (counter > content[index].length) {
      setTimeout(erase, 2000);
    }
  }
  function erase() {
    if (counter > -1) {
      setText(content[index].substring(0, counter--));
      setTimeout(erase, 100);
    } else {
      if (index + 1 === content.length) {
        index = 0;
        counter = 0;
      }
      index++;
      setTimeout(type, 2000);
    }
  }
  useEffect(type, []);
  return (
    <div className={`typeEffect-contnr ${props.class}`}>
      <p>
        <span>{text}</span>
        <span className="cursor"></span>
      </p>
    </div>
  );
}
