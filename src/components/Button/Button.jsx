import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({ children, onClick, type, name }) => {
    return (
        <>
            <button onClick={onClick} type={type} className={`${styles.btn} ${styles[name]}`}>{children}</button>
        </>
    );
}

export default Button;

Button.defaultProps = {
    type: "submit",
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    name: PropTypes.string,
    children: PropTypes.array.isRequired,
}