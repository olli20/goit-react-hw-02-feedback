import Button from '../Button/Button';
import Section from '../Section/Section';

import styles from './feedback-options.module.scss';

const FeedbackOptions = ({onGoodClick, onNeutralClick, onBadClick}) => {
  return (
    <>
      <Section title="Voting">
        <div className={styles.btnContainer}>
          <Button onClick={onGoodClick} type="button" color="good">Good</Button>
          <Button onClick={onNeutralClick} type="button" color="neutral">Neutral</Button>
          <Button onClick={onBadClick} type="button" color="bad">Bad</Button>
        </div>
      </Section>
    </>
  );
}

export default FeedbackOptions;