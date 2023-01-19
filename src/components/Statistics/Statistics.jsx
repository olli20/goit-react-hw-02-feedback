import PropTypes from 'prop-types';

import Section from '../Section/Section';

// import styles from './statistics.module.scss';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <Section title="Results">
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </Section>
        </>
    );
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}