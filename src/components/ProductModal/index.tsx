import styles from './styles.module.css'

import ProductImgMock from '../../assets/img/product-card-img-mock-2.png'
import CoverSlider from './CoverSlider'

const ProductModal = () => {
    return (
        <article className={styles.product_modal}>
            <section className={styles.product_cover}>
                <CoverSlider />
                <img src={ProductImgMock} alt="" />
                <div className={styles.script}>
                    <span>J</span>
                    <span>a</span>
                    <span>q</span>
                    <span>u</span>
                    <span>e</span>
                    <span>t</span>
                    <span>a</span>
                </div>
            </section>
            <section className={styles.product_details}>
                <h1 className={styles.product_name}>Jaqueta BRIM</h1>
                <span className={styles.product_resume}>
                    Jaqueta feminina de brim, preta com botões prateados e
                    detalhes em dourado
                </span>
                <span className={styles.product_price}><strong>R$ 249,90</strong></span>
                <p className={styles.product_description}>
                    The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.
                </p>
                <section className={styles.product_attributes}>

                </section>
            </section>
        </article>
    )
}

export default ProductModal