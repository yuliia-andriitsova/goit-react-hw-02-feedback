import { Message } from 'components/Message/Message';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <div>
      <span>Good : {good}</span>
      <span>Neutral : {neutral}</span>
      <span>Bad : {bad}</span>
      <span>Total : {total}</span>
      <span>Positive feedback : {positivePercentage || 0}%</span>
    </div>
  ) : (
    <Message />
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
