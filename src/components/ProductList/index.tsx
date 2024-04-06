import styles from './styles.module.css'

import ProductItem from '../ProductItem'

type Props = {
    items: Array<ProductCard>
}

const ProductList = (props: Props) => {
    const listItems = props.items.map(product => {
        return (
            <ProductItem
                id={product.id}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                name={product.name}
                price={product.price}
                editable
                key={product.id} />
        )
    })

    return (
        <ul className={styles.product_list}>
            {listItems}
        </ul>
    )
}

export default ProductList