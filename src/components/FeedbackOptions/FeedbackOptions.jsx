import PropTypes from 'prop-types';

import Button from '../Button/Button';
import Section from '../Section/Section';
import styles from './feedback-options.module.scss';

const FeedbackOptions = ({ options, handleVote }) => {


  const buttons = options.map(name =>
    <p key={name}><Button onClick={() => handleVote(name)} type="button" color={name}>{name}</Button></p>);

  return (
    <Section title="Voting">
      <div className={styles.btnContainer}>
         {buttons}
      </div>
    </Section>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    handleVote: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
