import { useState } from "react";

import "./accordion.styles.scss";

import DUMMY_DATA from "../../TAG_DATA.json";
import Tag from "../tags/tag.component";

const Accordion = ({ title }) => {
  const { cuisines } = DUMMY_DATA;
  // console.log(cuisines);

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
        <div className={`accordion-contents ${isOpen === true ? "open" : ""}`}>
          {cuisines.map((cuisine) => {
            const { id, name } = cuisine;
            return <Tag key={id} name={name} clickable={true} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
