import { Link } from "react-router-dom";
import "./LocationsTopSection.css";
import backButton from "../assets/icons/backArrow.png";

const LocationsTopSection = () => {
  return (
    <div className="top">
      <Link to={"/"}>
        <img src={backButton} alt="Back arrow" />
      </Link>
    </div>
  );
};

export default LocationsTopSection;
