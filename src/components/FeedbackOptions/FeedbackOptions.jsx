import { Button } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(key => {
        return (
          <Button onClick={onLeaveFeedback} name={key} key={key}>
            {key[0].toUpperCase() + key.slice(1)}
          </Button>
        );
      })}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};
