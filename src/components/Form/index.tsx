import styles from './styles.module.css';

type Props = {
    children?: React.ReactNode;
    onSubmit?: (e: React.FormEvent) => void | Promise<void>;
};

const Form = (props: Props) => {
    return (
        <div className={styles.form_container}>
            <form onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </div>
    );
};

export default Form;