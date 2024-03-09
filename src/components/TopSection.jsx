import { useState } from "react";
import { Link } from "react-router-dom";
import "./TopSection.css";
import Sidebar from "./Sidebar";

const TopSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLabelClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="top">
      <div className="menu">
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check" onClick={handleLabelClick}>
          ...
        </label>
      </div>

      <div>
        <Link to={"/locations"}>+</Link>
      </div>
      {isSidebarOpen && <Sidebar />}
    </div>
  );
};

export default TopSection;
