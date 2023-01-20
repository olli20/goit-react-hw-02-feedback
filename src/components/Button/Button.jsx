import React from 'react';
import PropTypes from 'prop-types';

import * as RemixIcon from "react-icons/ri";

import styles from './button.module.scss';

const Button = ({ onClick, type, name, icon, children }) => {
    const iconComponent = React.createElement(RemixIcon[icon]);
    return (
        <>
            <button onClick={onClick} type={type} className={`${styles.btn} ${styles[name]}`}>{iconComponent}{children}</button>
        </>
    );
}

export default Button;

Button.defaultProps = {
    type: "submit",
    icon: "",
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    name: PropTypes.string.isRequired,
    icon: PropTypes.string,
    children: PropTypes.string.isRequired,
}