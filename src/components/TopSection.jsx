import { useState } from "react";
import { Link } from "react-router-dom";
import "./TopSection.css";
import Sidebar from "./Sidebar";
import { CSSTransition } from "react-transition-group";

const TopSection = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLabelClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  //options to go to locations page or sidebar
  return (
    <div className={`top ${isSidebarOpen ? "top-sidebar-open" : ""}`}>
      <div className="menu">
        <input type="checkbox" name="checkbox" id="check" />
        <label htmlFor="check" onClick={handleLabelClick}>
          ...
        </label>
      </div>

      {/* link to locations page */}
      <div>
        <Link to={"/locations"}>+</Link>
      </div>

      {/* creates a smooth transition upon opening sidebar */}
      <CSSTransition
        in={isSidebarOpen}
        timeout={500}
        classNames="sidebar"
        unmountOnExit
      >
        <Sidebar />
      </CSSTransition>
    </div>
  );
};

export default TopSection;
