import {PropTypes} from 'prop-types'
  
export const EducationCard = ({education}) => {
  return (
    <div>
        <p>{education.school}</p>
        <p>{education.degree}</p>
        <p>{education.startDate}</p>
        <p>{education.endDate}</p>
        <p>{education.location}</p>
    </div>
  )
}

EducationCard.propTypes = {
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        startDate: PropTypes.isRequired,
        endDate: PropTypes.isRequired,
        location: PropTypes.string.isRequired,
    }).isRequired,
}
