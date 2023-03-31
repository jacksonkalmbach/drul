import Tag from "../tags/tag.component";
import "./filter-bar.styles.scss";

import TAG_DATA from "../../TAG_DATA.json";

const FilterBar = () => {
  const { cuisines, tags } = TAG_DATA;

  return (
    <>
      <div className="filter-bar-container">
        <div className="filter-bar">
          <div className="cuisine-type-container">
            {cuisines.map((cuisine) => {
              const { id, name } = cuisine;
              return <Tag key={id} name={name} />;
            })}
          </div>
          <input placeholder="Search by Category" />
          {tags.map((tag) => {
            const { id, name } = tag;
            return <Tag key={id} name={name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FilterBar;
