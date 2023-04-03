import ExploreCard from "../explore-card/explore-card.component";
import { useState, useEffect, useRef } from "react";
// import { useSelector, useDispatch } from "react-redux";

import "./selected-filters.styles.scss";
import RESTAURANT_DATA from "../../RESTAURANT_DATA.json";

const SelectedFilters = () => {
  const { restuarants } = RESTAURANT_DATA;
  // const sampleTag = restuarants[0].tags[0].name;

  const [isShuffled, setIsShuffled] = useState(false);

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const children = containerRef.current.children;
    for (let i = 0; i < children.length; i++) {
      children[i].style.animationDelay = `${i * 0.1}s`;
    }
  }, [restuarants]);

  return (
    <div className="explore-and-selected-filters">
      <ul className="selected-filters-container">
        <li className="selected-filter-category">
          Cusine:
          <div className="selected-cuisine-filters"></div>
        </li>
        <li className="selected-filter-category">Tags: </li>
        <li className="selected-filter-category">Location: </li>
        <li
          className={`shuffle-filters ${isShuffled ? "shuffled" : ""}`}
          title="Shuffle Filters"
          onClick={handleShuffle}
        >
          <span className="material-symbols-outlined">magic_button</span>
        </li>
      </ul>
      <div className="filtered-loctaions-container" ref={containerRef}>
        {restuarants.map((restaurant) => (
          <ExploreCard key={restaurant.id} details={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SelectedFilters;
