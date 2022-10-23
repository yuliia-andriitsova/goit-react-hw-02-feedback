import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.buttons}>
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
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
  ),
  onLeaveFeedback: PropTypes.func,
};
