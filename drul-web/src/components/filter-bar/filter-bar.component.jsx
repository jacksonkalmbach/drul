import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";

import Accordion from "../accordion/accordion.component";
import "./filter-bar.styles.scss";

import DUMMY_DATA from "../../TAG_DATA.json";

const FilterBar = () => {
  const [cuisines, setCuisines] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (DUMMY_DATA) {
      setCuisines(DUMMY_DATA.cuisines);
      setTags(DUMMY_DATA.tags);
    }
  }, [DUMMY_DATA]);

  return (
    <>
      <div className="filter-bar-container">
        <Accordion title="Cuisine" filterOptions={cuisines} />
        <Accordion title="Tags" filterOptions={tags} />
        <Accordion title="Location" />
      </div>
    </>
  );
};

export default FilterBar;
