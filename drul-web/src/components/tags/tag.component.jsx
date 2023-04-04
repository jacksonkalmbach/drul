import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./tag.styles.scss";

const Tag = ({ id, name, clickable, removable, add, remove }) => {
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = () => {
    if (!selected) {
      setSelected(true);
      dispatch(add({ id, name }));
    } else {
      dispatch(remove(id));
      setSelected(false);
    }
  };

  const handleRemove = () => {
    dispatch(remove(id));
    setSelected(false);
  };

  return (
    <div
      className={`tag-container ${selected ? "selected" : ""} ${
        clickable ? "clickable" : ""
      }`}
      onClick={clickable ? handleSelect : null}
    >
      {removable ? (
        <>
          {name}{" "}
          <span className="material-symbols-rounded" onClick={handleRemove}>
            close
          </span>
        </>
      ) : (
        <>{name}</>
      )}
    </div>
  );
};

export default Tag;
