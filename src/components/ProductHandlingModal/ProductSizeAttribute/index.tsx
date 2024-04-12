import styles from './styles.module.css'

type Props = {
    sizes: SizeRef[]
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
        </ul>
    )
}

export default ProductSizeAttribute