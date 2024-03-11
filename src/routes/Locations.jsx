import "./Locations.css";
import LocationsTopSection from "../components/LocationsTopSection";
import BoxComponent from "../components/BoxComponent1";
import BoxComponent2 from "../components/BoxComponent2";
import BoxComponent3 from "../components/BoxComponent3";
import BoxComponent4 from "../components/BoxComponent4";

const Locations = () => {
  return (
    <div className="Locations">
      <div>
        <LocationsTopSection></LocationsTopSection>
      </div>
      <div>
        <BoxComponent></BoxComponent>
      </div>
      <div2>
        <BoxComponent2></BoxComponent2>
      </div2>
      <div2>
        <BoxComponent3></BoxComponent3>
      </div2>
      <div2>
        <BoxComponent4></BoxComponent4>
      </div2>
    </div>
  );
};

export default Locations;
