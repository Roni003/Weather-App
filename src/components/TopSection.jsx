import { Link } from "react-router-dom";
import "./TopSection.css"

const TopSection = () => {
  return (<div className="top">
    <div>...</div>
    <div><Link to={"/locations"}>+</Link></div>
  </div>);
}

export default TopSection;