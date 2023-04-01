import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./map.styles.scss";

const googleMapsAPIKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function Map(props) {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: googleMapsAPIKey });

  if (typeof window === "undefined" || !isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="map-container">
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      />
    </div>
  );
}

export default Map;
