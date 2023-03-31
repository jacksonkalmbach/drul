import Tag from "../tags/tag.component";
import "./filter-bar.styles.scss";

const cuisines = [
  "🇮🇹 Italian",
  "🇯🇵 Japanese",
  "🇺🇸 American",
  "🇫🇷 French",
  "🇲🇽 Mexican",
  "🇨🇳 Chinese",
  "🇬🇷 Greek",
  "🇹🇭 Thai",
];

// const tags = [
//   {
//     1: "🔥 Trending",
//   },
//   {
//     2: "🍷 Wine Lovers",
//   },
//   {
//     3: "👩‍❤️‍👨 Date Night",
//   },
// ];

const FilterBar = () => {
  return (
    <div className="filter-bar-container">
      <div className="filter-bar">
        <>Filter</>
        <input placeholder="Search by Category" />
        {cuisines.map((cuisine) => (
          <Tag cuisineType={cuisine} />
        ))}
        <button>Add Tags</button>
      </div>
    </div>
  );
};

export default FilterBar;
