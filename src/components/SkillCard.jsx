import {PropTypes} from 'prop-types'

export const SkillCard = ({skill}) => {
  return (
    <div>
        <p>{skill}</p>
    </div>
  )
}


SkillCard.propTypes = {
    skill: PropTypes.string.isRequired,
}
