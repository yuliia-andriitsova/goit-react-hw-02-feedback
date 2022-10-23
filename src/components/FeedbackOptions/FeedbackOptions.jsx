import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export function FeedbackOptions({ onLeaveFeedback, arrayState }) {
  return (
    <div className={css.buttons}>
      {Object.keys(arrayState).map(item => (
        <button
          key={item}
          name={item}
          type="button"
          onClick={event => onLeaveFeedback(event)}
        >
          {item}
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
const yu = {
  if: 0,
  yui: 4,
  eyt: 6,
};

console.log(Object.keys(yu).map(it => it));
