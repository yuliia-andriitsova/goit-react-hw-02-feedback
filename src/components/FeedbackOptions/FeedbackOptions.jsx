import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(item => (
        <button
          key={item.name}
          name={item.name}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item.title}
        </button>
      ))}
      {/* <button type="button" onClick={onLeaveFeedbackGood}>
        Good
      </button>
      <button type="button" onClick={onLeaveFeedbackNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedbackBad}>
        Bad
      </button> */}
    </div>
  );
}

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
  ),
  onLeaveFeedback: PropTypes.func,
};
