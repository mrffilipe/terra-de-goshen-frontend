import styles from './styles.module.css';

type Props = {
    value: string;
};

const ProductDescription = (props: Props) => {
    return (
        <div className={styles.product_description}>
            <p>{props.value}</p>
        </div>
    );
};

export default ProductDescription;