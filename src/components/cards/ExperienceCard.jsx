import moment from "moment";
import { PropTypes } from "prop-types";

export const ExperienceCard = ({ experience }) => {
  return (
    <div className="card">
      <p className="bold-text">{experience.company}</p>
      <p className="italic-text">{experience.position}</p>
      <p className="light-text">{moment(experience.startDate, "YYYY-MM-DD").format("DD-MMMM-YYYY")}</p>
      <p className="light-text">
        {experience.endDate == ""
          ? "On going"
          : moment(experience.endDate, "YYYY-MM-DD").format("DD-MMMM-YYYY")}
      </p>
      <p>{experience.location}</p>
      <p>{experience.description}</p>
    </div>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
