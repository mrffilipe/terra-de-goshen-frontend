import styles from './styles.module.css';

type Props = {
    value: string;
};

const PageHeaderTitle = (props: Props) => {
    return <h1 className={styles.title}>{`"${props.value}"`}</h1>
};

export default PageHeaderTitle;