import TFLButton from "./TFLButton";
import "./Blurred.css"

const Blurred = () => {
  return (
    <div className="blurred-container">
      <div className="hourly-forecast">

      </div>

      <div className="lines">
        <div className="line-container">
          <TFLButton color={"red"} />
          <TFLButton color={"yellow"} />
        </div>
        <div className="line-container">
          <TFLButton color={"green"} />
          <TFLButton color={"gray"} />
        </div>
      </div>
    </div>);
}

export default Blurred;