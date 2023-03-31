import ExploreCard from "../../components/explore-card/explore-card.component";
import FilterBar from "../../components/filter-bar/filter-bar.component";

import "./explore.styles.scss";

import RESTAURANT_DATA from "../../RESTAURANT_DATA.json";

const Explore = () => {
  const { restuarants } = RESTAURANT_DATA;

  return (
    <div className="explore-container">
      <FilterBar />
      <div className="filtered-loctaions-container">
        {restuarants.map((restaurant) => (
          <ExploreCard key={restaurant.id} details={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Explore;
