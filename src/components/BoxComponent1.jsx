import PropTypes from 'prop-types';
import "./BoxComponent1.css";

const BoxComponent = ({ cityName, icon, temperature, details }) => {
    return (
    <div className="box">
        <h2>{cityName}</h2>
        <div className="subdivision">
            <img src={icon} alt="weather icon" className="icon" />
        </div>
        <div className="subdivision">
            <span>Temperature: {temperature}&deg;C</span>
        </div>
        <div className="subdivision">
            <span>Details: {details}</span>
        </div>
    </div>
    );
};

BoxComponent.propTypes = {
    cityName: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.number.isRequired,
    details: PropTypes.string.isRequired,
};

export default BoxComponent;