import Accordion from "../accordion/accordion.component";
import "./filter-bar.styles.scss";

import DUMMY_DATA from "../../TAG_DATA.json";

const FilterBar = () => {
  const { cuisines, tags } = DUMMY_DATA;

  return (
    <>
      <div className="filter-bar-container">
        <Accordion title="Cuisine" data={cuisines} />
        <Accordion title="Tags" data={tags} />
        <Accordion title="Location" />
      </div>
    </>
  );
};

export default FilterBar;
