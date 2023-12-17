import styles from './styles.module.css'

import ProductCard from './ProductCard'
import Pagination from './Pagination'

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
            <Pagination />
        </section>
    )
}

export default Homepage