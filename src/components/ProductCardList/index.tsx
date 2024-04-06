import styles from './styles.module.css'

import ProductCard from '../ProductCard'

type Props = {
    items: Array<ProductCard>,
    onlyReading?: boolean
}

const ProductCardList = (props: Props) => {
    const listItems = props.items.map(product => {
        return (
            <ProductCard
                id={product.id}
                imageUrl={product.imageUrl}
                imageAlt={product.imageAlt}
                name={product.name}
                price={product.price}
                editable={!props.onlyReading && product.editable}
                key={product.id} />
        )
    })

    return (
        <ul className={styles.product_card_list}>
            {listItems}
        </ul>
    )
}

export default ProductCardList