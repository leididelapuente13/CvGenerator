import {PropTypes} from 'prop-types'

export const LanguageCard = ({language}) => {
  return (
    <div>
        <p className='bold-text'>{language.name + " " + language.fluency}</p>
    </div>
  )
}

LanguageCard.propTypes = {
    language: PropTypes.shape({
        name: PropTypes.string.isRequired,
        fluency: PropTypes.string.isRequired,
    }).isRequired,
}
