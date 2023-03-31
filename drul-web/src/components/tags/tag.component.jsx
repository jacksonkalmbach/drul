import { useState } from "react";

import "./tag.styles.scss";

const Tag = ({ cuisineType }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`tag-container ${selected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      {cuisineType}
    </div>
  );
};

export default Tag;
