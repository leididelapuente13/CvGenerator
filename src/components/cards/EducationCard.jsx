import {PropTypes} from 'prop-types'
import moment from "moment";

export const EducationCard = ({education}) => {
  return (
    <div className='card'>
        <p className='bold-text'>{education.school}</p>
        <p className='italic-text'>{education.degree}</p>
        <p className='light-text'>{moment(education.startDate, "YYYY-MM-DD").format("DD-MMMM-YYYY")}</p>
        <p className='light-text'>{education.endDate == "" ? "On going" : moment(education.endDate, "YYYY-MM-DD").format("DD-MMMM-YYYY")}</p>
        <p>{education.location}</p>
    </div>
  )
}

EducationCard.propTypes = {
    education: PropTypes.shape({
        school: PropTypes.string.isRequired,
        degree: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string,
        location: PropTypes.string.isRequired,
    }).isRequired,
}