import styles from './styles.module.css'

type Props = {
    value: string,
    className?: string | undefined,
    onClick: () => void
}

const Button = (props: Props) => {
    return (
        <button
            className={`${styles.button} ${props.className}`}
            onClick={props.onClick}
        >
            {props.value}
        </button>
    )
}

export default Button