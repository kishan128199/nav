import "./AccordionStyle.css";
function Accordion({ AccordionData, active, onToggle }) {
  const { detail, title } = AccordionData;

  return (
    <li
      className={`accordion_item ${active ? "active" : null}`}
      onClick={onToggle}
    >
      {active ? (
        <span className="control"></span>
      ) : (
        <span className="control-collapse"></span>
      )}
      {title}

      <div
        className="answer_wrapper"
        style={
          active
            ? {
                height: `100% `,
                maxHeight: `500px`,
                overflow: "hidden",
                transition: " all 0.3s ease-in-out",
              }
            : {
                maxHeight: `0px`,
                overflow: "hidden",
                transition: "all 0.1s ease-in-out",
              }
        }
      >
        {detail}
      </div>
    </li>
  );
}
export default Accordion;
