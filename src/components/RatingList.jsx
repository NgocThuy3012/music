import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { number } from "prop-types";

const RatingList = ({ rating }) => {
  return (
    <div className="rating-icon">
      {[...Array(rating)].map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} color="#F1B557" />
      ))}
      {[...Array(5 - rating)].map((_, index) => (
        <FontAwesomeIcon key={rating + index} icon={faStar} color="gray" />
      ))}
    </div>
  );
};

RatingList.propTypes = {
  rating: number,
};

export default RatingList;
