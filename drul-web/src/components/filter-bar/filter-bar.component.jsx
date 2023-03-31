import Accordion from "../accordion/accordion.component";
import "./filter-bar.styles.scss";

const FilterBar = () => {
  return (
    <>
      <div className="filter-bar-container">
        <Accordion title="Cuisine" />
        <Accordion title="Tags" />
        <Accordion title="Location" />
      </div>
    </>
  );
};

export default FilterBar;
