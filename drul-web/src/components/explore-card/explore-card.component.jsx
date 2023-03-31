import Tag from "../tags/tag.component";
import "./explore-card.styles.scss";

const ExploreCard = ({ details }) => {
  const { name, address, description, cuisine, tags } = details;

  return (
    <div className="explore-card-container">
      <h3>{name}</h3>
      <p>{address}</p>
      <p>{description}</p>
      <p>{cuisine}</p>
      <p style={{ fontWeight: "bold" }}>Location Tags</p>
      <div className="explore-card-tags-container">
        {tags.map((tag) => {
          const { id, name } = tag;
          return <Tag key={id} name={name} clickable={false} />;
        })}
      </div>
    </div>
  );
};

export default ExploreCard;
