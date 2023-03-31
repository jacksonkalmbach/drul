import { useState } from "react";

import "./tag.styles.scss";

const Tag = ({ name, clickable }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`tag-container ${selected ? "selected" : ""} ${
        clickable ? "clickable" : ""
      }`}
      onClick={clickable ? handleSelect : null}
    >
      {name}
    </div>
  );
};

export default Tag;
