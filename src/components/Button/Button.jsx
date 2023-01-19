import styles from './button.module.scss';

const Button = ({ children, type, onClick, color }) => {
    return (
        <>
            <button onClick={onClick} type={type} className={`${styles.btn} ${styles[color]}`}>{children}</button>
        </>
    );
}

export default Button;