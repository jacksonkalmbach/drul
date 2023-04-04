import ExploreCard from "../explore-card/explore-card.component";
import { useState, useEffect, useRef } from "react";
import { removeCuisine } from "../../store/reducers/explore/exploreOptionsSlice";

import "./selected-filters.styles.scss";
import RESTAURANT_DATA from "../../RESTAURANT_DATA.json";
import { useSelector } from "react-redux";
import Tag from "../tags/tag.component";

const SelectedFilters = () => {
  const { restuarants } = RESTAURANT_DATA;

  const [searchResults, setSearchResults] = useState([]);
  const [selectedCuisineTag, setSelectedCuisineTag] = useState([]);
  const [selectedLocationsTag, setSelectedLocationsTag] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [isShuffled, setIsShuffled] = useState(false);

  const shuffle = (array) => {
    const random = Math.floor(Math.random() * array.length);
    const randomRestuarant = array[random];
    console.log("SHUFFLED RESTAURANT", randomRestuarant);
  };

  const handleSearch = () => {
    const cuisineRestaurantsMap = {};
    const tagRestaurantsMap = {};
    const locationRestaurantsMap = {};

    for (let restaurant of restuarants) {
      if (!cuisineRestaurantsMap[restaurant.cuisine]) {
        cuisineRestaurantsMap[restaurant.cuisine] = [restaurant];
      } else {
        cuisineRestaurantsMap[restaurant.cuisine].push(restaurant);
      }

      for (let tag of restaurant.tags) {
        if (!tagRestaurantsMap[tag.name]) {
          tagRestaurantsMap[tag.name] = [restaurant];
        } else {
          tagRestaurantsMap[tag.name].push(restaurant);
        }
      }

      // // Group by locations
      // for (let location of restaurant.location) {
      //   if (!locationRestaurantsMap[location.name]) {
      //     locationRestaurantsMap[location.name] = [restaurant];
      //   } else {
      //     locationRestaurantsMap[location.name].push(restaurant);
      //   }
      // }
    }
    const results = [];
    for (let cuisine of selectedCuisineTag) {
      const { id, name } = cuisine;
      if (cuisineRestaurantsMap[name]) {
        results.push(...cuisineRestaurantsMap[name]);
      }
    }
    for (let tag of selectedTags) {
      const { id, name } = tag;
      if (tagRestaurantsMap[name]) {
        results.push(...tagRestaurantsMap[name]);
      }
    }
    for (let location of selectedLocationsTag) {
      const { id, name } = location;
      if (locationRestaurantsMap[name]) {
        results.push(...locationRestaurantsMap[name]);
      }
    }

    const uniqueResults = [...new Set(results)];
    setSearchResults(uniqueResults);
  };

  const handleShuffle = () => {
    setIsShuffled(!isShuffled);
    if (!isShuffled) {
      shuffle(restuarants);
    }
  };
  const selectedCuisines = useSelector((state) => state.exploreOptions);

  useEffect(() => {
    const {
      exploreOptions: { cuisines, locations, tags },
    } = selectedCuisines;
    const cusinesArray = Object.values(cuisines);
    const locationsArray = Object.values(locations);
    const tagsArray = Object.values(tags);
    setSelectedCuisineTag(cusinesArray);
    setSelectedLocationsTag(locationsArray);
    setSelectedTags(tagsArray);
  }, [selectedCuisines]);

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
          <div className="selected-filters">
            {selectedCuisineTag.map(({ id, name }) => (
              <Tag
                key={id}
                id={id}
                name={name}
                clickable={false}
                removable={true}
                remove={removeCuisine}
              />
            ))}
          </div>
        </li>
        <li className="selected-filter-category">
          Tags:
          <div className="selected-filters">
            {selectedTags.map(({ id, name }) => (
              <Tag
                key={id}
                id={id}
                name={name}
                clickable={false}
                removable={true}
                remove={removeCuisine}
              />
            ))}
          </div>
        </li>
        <li className="selected-filter-category">Location: </li>
        <li className="search-icon" onClick={handleSearch}>
          <span className="material-symbols-outlined">search</span>
        </li>
        <li
          className={`shuffle-filters ${isShuffled ? "shuffled" : ""}`}
          title="Shuffle Filters"
          onClick={handleShuffle}
        >
          <span className="material-symbols-outlined">magic_button</span>
        </li>
      </ul>
      <div className="filtered-loctaions-container" ref={containerRef}>
        {searchResults.map((restaurant) => (
          <ExploreCard key={restaurant.id} details={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SelectedFilters;
