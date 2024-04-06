import styles from './styles.module.css'

import { Edit } from '@mui/icons-material'

const ProductItem = (props: ProductCard) => {
    return (
        <li className={styles.product_item}>
            <div className={styles.product_cover}>
                <img src={props.imageUrl} alt={props.imageAlt} />
            </div>
            <div className={styles.product_details}>
                <h4>{props.name}</h4>
                <span><strong>R$ {props.price}</strong></span>
            </div>
            {
                props.editable &&
                <button className={styles.edit_btn}>
                    <Edit />
                </button>
            }
        </li>
    )
}

export default ProductItem