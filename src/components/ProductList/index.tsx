import styles from './styles.module.css'

import ProductItem from '../ProductItem'

type Props = {
    items: Array<Product>
    onProductClick: (product: Product) => void
}

const ProductList = (props: Props) => {
    const listItems = props.items.map(product => {
        return (
            <ProductItem
                id={product.id}
                imageUrl={product.images[0].image.imageUrl}
                imageAlt={product.images[0].image.imageAlt}
                name={product.name}
                price={product.price.toString()}
                onClick={() => props.onProductClick(product)}
                editable />
        )
    })

    return (
        <ul className={styles.product_list}>
            {listItems}
        </ul>
    )
}

export default ProductList