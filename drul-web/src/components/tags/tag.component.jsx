import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTag } from "../../store/reducers/explore/exploreOptionsSlice";

import "./tag.styles.scss";

const Tag = ({ id, name, clickable, removable, add, remove }) => {
  const [selected, setSelected] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);
  const dispatch = useDispatch();
  const clearTagValue = useSelector((state) => state.exploreOptions.clearTag);

  const handleSelect = () => {
    if (!selected) {
      setSelected(true);
      dispatch(add({ id, name }));
    } else {
      dispatch(remove(id));
      setSelected(false);
    }
  };

  useEffect(() => {
    if (clearTagValue) {
      setShouldReset(true);
      dispatch(clearTag(true));
    }
  }, [clearTagValue, dispatch]);

  useEffect(() => {
    if (shouldReset) {
      setSelected(false);
      setShouldReset(false);
    }
  }, [shouldReset]);

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
