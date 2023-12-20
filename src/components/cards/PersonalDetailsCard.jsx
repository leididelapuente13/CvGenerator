import {PropTypes} from 'prop-types'

export const PersonalDetailsCard = ({personalInfo}) => {
    return (
      <>
        <h2>{personalInfo.fullName}</h2>
        <p>{personalInfo.email}</p>
        <span>{personalInfo.phoneNumber}</span>
        <span>{personalInfo.address}</span>
      </>
    );
};

PersonalDetailsCard.propTypes = {
  personalInfo: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    address: PropTypes.string,
  }).isRequired
}