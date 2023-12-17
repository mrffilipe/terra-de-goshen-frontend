import styles from './styles.module.css'

import ProductCard from './ProductCard'

const Homepage = () => {
    return (
        <section className={styles.homepage}>
            <div className={styles.product_header}>
                <h4>Masculino</h4>
            </div>
            <div className={styles.products}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    )
}

export default Homepage