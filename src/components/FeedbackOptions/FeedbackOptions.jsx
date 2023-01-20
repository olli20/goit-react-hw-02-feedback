import React from 'react';
import PropTypes from 'prop-types';

import * as TablerIcons from "react-icons/tb";

import Button from '../Button/Button';
import Section from '../Section/Section';
import styles from './feedback-options.module.scss';

const FeedbackOptions = ({ options, handleVote }) => {

  const buttons = options.map(button => {
    const { name, icon } = button;
    const iconComponent = React.createElement(TablerIcons[icon]);
    return <Button key={name} onClick={() => handleVote(name)} type="button" name={name}>{iconComponent}{name}</Button>
  });
    
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
    options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}
