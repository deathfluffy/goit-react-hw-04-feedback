import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <div className={css.feed_back_options_container} key={option}>
          <button className={css.feed_back_options_button} name={option} type="button" onClick={leaveFeedback}>
            {option}
          </button>
        </div>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
};