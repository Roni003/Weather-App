import { Link } from "react-router-dom";
import "./Locations.css";
import backButton from "../assets/icons/backArrow.png";

const Locations = () => {
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

export default Locations;
