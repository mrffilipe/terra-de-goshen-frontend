import styles from './styles.module.css'

import SizeRef from '../../../Domain/Entities/SizeRef'

type Props = {
    sizes: SizeRef[]
    editable?: boolean
}

const ProductSizeAttribute = (props: Props) => {
    const listSizes = props.sizes.map(size => (
        <li key={size.id}>
            <span>{size.size.value}</span>
        </li>
    ))

    return (
        <ul className={styles.product_size_attribute}>
            {listSizes}
            {
                props.editable &&
                <button className={styles.add_btn}>+</button>
            }
        </ul>
    )
}

export default ProductSizeAttribute