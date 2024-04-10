import styles from './styles.module.css'

import { Edit } from '@mui/icons-material'

const ProductCard = (props: ProductCard) => {
    return (
        <li className={styles.product_card} key={props.id}>
            {
                props.editable &&
                <button className={styles.edit_btn}>
                    <Edit />
                </button>
            }
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