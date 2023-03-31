import { useState } from "react";

import "./tag.styles.scss";

const Tag = ({ name }) => {
  const [selected, setSelected] = useState(false);

  const handleSelect = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`tag-container ${selected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      {name}
    </div>
  );
};

export default Tag;
