import FilterBar from "../../components/filter-bar/filter-bar.component";
import SelectedFilters from "../../components/selected-filters/selected-filters.component";

import "./explore.styles.scss";

const Explore = () => {
  return (
    <div className="explore-container">
      <FilterBar />
      <SelectedFilters />
    </div>
  );
};

export default Explore;
