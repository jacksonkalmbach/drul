import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  addCuisine,
  removeCuisine,
  addTag,
  removeTag,
  addLocation,
  removeLocation,
} from "../../store/reducers/explore/exploreOptionsSlice";

import Accordion from "../accordion/accordion.component";
import "./filter-bar.styles.scss";

import DUMMY_DATA from "../../TAG_DATA.json";

const FilterBar = () => {
  const [cuisines, setCuisines] = useState([]);
  const [tags, setTags] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (DUMMY_DATA) {
      setCuisines(DUMMY_DATA.cuisines);
      setTags(DUMMY_DATA.tags);
      setLocations(DUMMY_DATA.locations);
    }
  }, []);

  const exploreOptions = useSelector((state) => state.exploreOptions);
  console.log("SF_STATE_FILTER_BAR", exploreOptions);

  return (
    <>
      <div className="filter-bar-container">
        <Accordion
          title="Cuisine"
          filterOptions={cuisines}
          add={addCuisine}
          remove={removeCuisine}
        />
        <Accordion
          title="Tags"
          filterOptions={tags}
          add={addTag}
          remove={removeTag}
        />
        <Accordion
          title="Location"
          filterOptions={locations}
          add={addLocation}
          remove={removeLocation}
        />
      </div>
    </>
  );
};

export default FilterBar;
