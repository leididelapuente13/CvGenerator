import {PropTypes} from 'prop-types'

export const SkillCard = ({skill}) => {
  return (
    <div>
        <p>{skill.skill}</p>
    </div>
  )
}


SkillCard.propTypes = {
  skill: PropTypes.shape({
      skill: PropTypes.string.isRequired,
  }).isRequired,
};
