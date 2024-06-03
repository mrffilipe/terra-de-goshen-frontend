import styles from './styles.module.css';

type Props = {
    value: number;
};

const ProductPrice = (props: Props) => {
    return (
        <div className={styles.product_price}>
            <span>R$ <strong>{props.value}</strong></span>
        </div>
    );
};

export default ProductPrice;