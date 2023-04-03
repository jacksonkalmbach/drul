import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addCuisineType,
  removeCuisineType,
} from "../../store/reducers/explore/exploreCuisinesSlice";

import "./tag.styles.scss";

const Tag = ({ id, name, clickable, removable }) => {
  const [selected, setSelected] = useState(false);

  // const dispatch = useDispatch();

  const handleSelect = () => {
    setSelected(!selected);
    // if (selected) {
    //   dispatch(addCuisineType({ id, name }));
    // } else {
    //   dispatch(removeCuisineType(id));
    // }
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
          <span className="material-symbols-rounded" onClick={handleSelect}>
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
