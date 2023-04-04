import { useState, useEffect, useRef } from "react";

import "./accordion.styles.scss";

import Tag from "../tags/tag.component";

const Accordion = ({ title, filterOptions, add, remove }) => {
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
            return (
              <Tag
                key={id}
                id={id}
                name={name}
                clickable={true}
                add={add}
                remove={remove}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
