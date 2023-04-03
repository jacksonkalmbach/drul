import { useState, useEffect, useRef } from "react";
import {
  addCuisineType,
  removeCuisineType,
} from "../../store/reducers/explore/exploreCuisinesSlice";

import "./accordion.styles.scss";

import Tag from "../tags/tag.component";

const Accordion = ({ title, filterOptions }) => {
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (filterOptions) {
      setOptions(filterOptions);
    }
  }, [filterOptions]);

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
          {options.map((option) => {
            const { id, name } = option;
            return <Tag key={id} id={id} name={name} clickable={true} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
