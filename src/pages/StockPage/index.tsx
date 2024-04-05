import styles from './styles.module.css'

import PageHeaderTitle from '../../components/PageHeaderTitle'
import ProductSession from '../../components/ProductSession'

const StockPage = () => {
    return (
        <article className={styles.stock_page}>
            <PageHeaderTitle value='Gerenciar estoque' />
            <ProductSession>
                
            </ProductSession>
        </article>
    )
}

export default StockPage