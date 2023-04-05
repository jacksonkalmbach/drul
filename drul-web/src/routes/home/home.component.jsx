import { Link } from "react-router-dom";
import landingPageImg from "../../assets/landing-page-nowon.png";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-container">
      <div className="landing-page-header-section">
        <h1 className="landing-page-title">Local Flavor at Your Fingertips</h1>
        <p className="tagline">
          Search through hundreds of nearby restaurants and bars to find new
          spots or return to familiar favorites.
        </p>
        <div className="start-search-btn-container">
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/explore"
          >
            <button>Start Your Search</button>
          </Link>
        </div>
      </div>
      <img
        className="landing-page-img"
        src={landingPageImg}
        alt="landing page"
      />
    </div>
  );
};

export default Home;
