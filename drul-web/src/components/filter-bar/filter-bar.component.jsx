import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addCuisine,
  removeCuisine,
  addTag,
  removeTag,
  addLocation,
  removeLocation,
  clearFilters,
  clearTag,
} from "../../store/reducers/explore/exploreOptionsSlice";

import Accordion from "../accordion/accordion.component";
import "./filter-bar.styles.scss";

import DUMMY_DATA from "../../TAG_DATA.json";

const FilterBar = () => {
  const [cuisines, setCuisines] = useState([]);
  const [tags, setTags] = useState([]);
  const [locations, setLocations] = useState([]);
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(clearTag(true));
    dispatch(clearFilters());
    setTimeout(() => {
      dispatch(clearTag(false));
    }, 500);
  };

  useEffect(() => {
    if (DUMMY_DATA) {
      setCuisines(DUMMY_DATA.cuisines);
      setTags(DUMMY_DATA.tags);
      setLocations(DUMMY_DATA.locations);
    }
  }, []);

  const exploreOptions = useSelector((state) => state.exploreOptions);

  return (
    <>
      <div className="filter-bar-container">
        {Object.keys(exploreOptions.exploreOptions.cuisines).length > 0 ||
        Object.keys(exploreOptions.exploreOptions.locations).length > 0 ||
        Object.keys(exploreOptions.exploreOptions.tags).length > 0 ? (
          <button className="clear-filters-btn" onClick={handleClearFilters}>
            Clear Filters
          </button>
        ) : (
          <button className="clear-filters-btn dormant">Clear Filters</button>
        )}
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
