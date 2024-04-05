import styles from './styles.module.css'

const ProductCard = (props: ProductCard) => {
    return (
        <li className={styles.product_card}>
            <div className={styles.product_cover}>
                <img src={props.imageUrl} alt={props.imageAlt} />
            </div>
            <div className={styles.product_details}>
                <h4>{props.name}</h4>
                <span><strong>R$ {props.price}</strong></span>
            </div>
        </li>
    )
}

export default ProductCard