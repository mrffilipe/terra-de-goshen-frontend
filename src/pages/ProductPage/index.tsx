import styles from './styles.module.css'

import ProductCard from '../../components/ProductCard'

const ProductPage = () => {
    return (
        <article className={styles.product_page}>
            <section className={styles.product_header}>
                <h1>Masculino</h1>
            </section>
            <section className={styles.product_result}>
                <ul className={styles.product_list}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
            </section>
        </article>
    )
}

export default ProductPage