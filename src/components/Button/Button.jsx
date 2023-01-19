// import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ children, onClick, type, color }) => {
    return (
        <>
            <button onClick={onClick} type={type} className={`${styles.btn} ${styles[color]}`}>{children}</button>
        </>
    );
}

export default Button;