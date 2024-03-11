import { Link } from "react-router-dom";
import "./LocationsTopSection.css";
import backButton from "../assets/icons/backArrow.png";

const LocationsTopSection = () => {
return (
    <div className="top">
    <div>
        <Link to={"/"}>
        <img src={backButton} alt="Back arrow" />
        </Link>
    </div>
    </div>
);
};

export default LocationsTopSection;