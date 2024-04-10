import styles from './styles.module.css'

import ProductCard from '../ProductCard'

type Props = {
    items: Array<Product>,
    onlyReading?: boolean
}

const ProductCardList = (props: Props) => {
    const listItems = props.items.map(product => {
        return (
            <ProductCard
                id={product.id}
                imageUrl={product.images[0].image.imageUrl}
                imageAlt={product.images[0].image.imageAlt}
                name={product.name}
                price={product.price.toString()}
                editable={props.onlyReading} /> // conferir
        )
    })

    return (
        <ul className={styles.product_card_list}>
            {listItems}
        </ul>
    )
}

export default ProductCardList