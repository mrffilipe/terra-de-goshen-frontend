import styles from './styles.module.css'

import ProductCardImgMock from '../../assets/img/product-card-img-mock.png'

const ProductCard = () => {
    return (
        <li className={styles.product_card}>
            <div className={styles.product_img}>
                <img src={ProductCardImgMock} alt="" />
            </div>
            <div className={styles.product_details}>
                <h4>CACETE AZUL COM DETALHES VERMELHOS</h4>
                <span><strong>R$ 279,90</strong></span>
            </div>
        </li>
    )
}

export default ProductCard