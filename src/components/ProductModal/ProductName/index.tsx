import styles from './styles.module.css';

type Props = {
    value: string;
};

const ProductName = (props: Props) => {
    return (
        <div className={styles.product_name}>
            <h1>{props.value}</h1>
        </div>
    );
};

export default ProductName;