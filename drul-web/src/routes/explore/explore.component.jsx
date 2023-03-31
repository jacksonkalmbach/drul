import { useState } from "react";

import ExploreCard from "../../components/explore-card/explore-card.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";

import "./explore.styles.scss";

import RESTAURANT_DATA from "../../RESTAURANT_DATA.json";
import Tag from "../../components/tags/tag.component";

const Explore = () => {
  const { restuarants } = RESTAURANT_DATA;
  const { tags } = restuarants;
  const sampleTag = restuarants[0].tags[0].name;

  const [isShuffled, setIsShuffled] = useState(false);

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  return (
    <div className="explore-container">
      <FilterBar />
      <div className="explore-and-selected-filters">
        <ul className="selected-filters-container">
          <li className="selected-filter-category">
            Cusine:
            <div className="selected-cuisine-filters">
              <Tag name={sampleTag} clickable={false} removable={true} />
            </div>
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
        <div className="filtered-loctaions-container">
          {restuarants.map((restaurant) => (
            <ExploreCard key={restaurant.id} details={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
