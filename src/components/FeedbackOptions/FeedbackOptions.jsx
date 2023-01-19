import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

const FeedbackOptions = ({options, onLeaveFeedback}) =>{
    return(
        <ul>
            {Object.keys(options).map(option => {
                return(
                    <li key={nanoid()}>    <button type="button" onClick={onLeaveFeedback}>{option}</button>
                    </li>
                )
            })}
          
        </ul>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        optionalProperty: PropTypes.number
      })
}

export default FeedbackOptions;