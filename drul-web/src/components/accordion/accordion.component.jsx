import { useState, useEffect, useRef } from "react";

import "./accordion.styles.scss";

import Tag from "../tags/tag.component";

const Accordion = ({ title, data }) => {
  console.log("PROP DATA", data);
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion-container">
        <div className="accordion-section-header" onClick={handleSectionClick}>
          <div className="accordion-title">{title}</div>
          <span
            className={`material-symbols-rounded ${
              isOpen === true ? "flipped" : ""
            }`}
          >
            expand_more
          </span>
        </div>
        {/* <div className={`accordion-contents ${isOpen === true ? "open" : ""}`}>
          {data.map((d) => {
            const { id, name } = d;
            return <Tag key={id} name={name} clickable={true} />;
          })}
        </div> */}
      </div>
    </>
  );
};

export default Accordion;
