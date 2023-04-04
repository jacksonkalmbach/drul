import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Tag from "../tags/tag.component";

import "./explore-card.styles.scss";

const ExploreCard = ({ details }) => {
  const { name, address, description, cuisine, tags } = details;
  const [saveRestuarant, setSaveRestuarant] = useState(false);
  const isLoggedInUser = useSelector((state) => state.userAuth.value);

  const handleSaveRestaurant = () => {
    if (isLoggedInUser) {
      setSaveRestuarant(!saveRestuarant);
    } else {
      alert("Sign In to bookmark restaurants");
    }
  };

  return (
    <div className="explore-card-container">
      <div className="explore-card-title-container">
        <h3>{name}</h3>
        <div
          className={`save-icon ${saveRestuarant ? "saved" : ""}`}
          onClick={handleSaveRestaurant}
        >
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
      <>
        📍
        <Link
          className="address-link"
          to="https://www.google.com/maps"
          target="_blank"
        >
          {address}
        </Link>
      </>
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
