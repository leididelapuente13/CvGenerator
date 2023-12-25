import moment from "moment";
import { PropTypes } from "prop-types";

export const ExperienceCard = ({ experience }) => {
  return (
    <div>
      <p>{experience.company}</p>
      <p>{experience.position}</p>
      <p>{moment(experience.startDate, "YYYY-MM-DD").format("DD-MMMM-YYYY")}</p>
      <p>
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
