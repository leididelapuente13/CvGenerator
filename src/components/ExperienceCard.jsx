import {PropTypes} from 'prop-types'

export const ExperienceCard = ({experience}) => {
  return (
    <div>
          <p>{experience.companyName}</p>
          <p>{experience.position}</p>
          <p>{experience.startDate}</p>
          <p>{experience.endDate}</p>
          <p>{experience.location}</p>
          <p>{experience.description}</p>
    </div>
  )
}

ExperienceCard.propTypes = {
    experience: PropTypes.shape({
        companyName: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        startDate: PropTypes.isRequired,
        endDate: PropTypes.isRequired,
        location: PropTypes.string,
        description: PropTypes.string.isRequired
    }).isRequired,
};