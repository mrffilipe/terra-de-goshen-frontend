import styles from './styles.module.css';

type Props = {
    className?: string;
    value: string;
    type?: "submit" | "reset" | "button";
    disabled?: boolean;
    onClick?: () => void | Promise<void>;
};

const Button = (props: Props) => {
    return (
        <button
            className={`${styles.button} ${props.className || ''}`}
            type={props.type}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
};

export default Button;