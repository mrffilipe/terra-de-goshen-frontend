import styles from './styles.module.css'

import ImageRef from '../../../Domain/Entities/ImageRef'

type Props = {
    images: ImageRef[]
    editable?: boolean
    onCloseProduct: () => void
}

const ProductCover = (props: Props) => {
    return (
        <section className={styles.product_cover}>
            <div className={styles.main_cover} style={{
                backgroundImage: "url('https://d8vlg9z1oftyc.cloudfront.net/ailos/image/product/7b1ed85e9ec6a3c690e9d8ceab110cfa20221020074114/850/camiseta-feminina-zatom-bicicleta_1928.png')"
            }}>
                {
                    (props.editable && props.images.length === 0) && (
                        <span>Adicione pelo menos uma imagem</span>
                    )
                }
            </div>
            <div className={styles.covers}>
                <ul className={styles.covers_list}>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                    <li><div></div></li>
                </ul>
                {
                    props.editable && (
                        <div className={styles.add_cover_btn}>
                            <span>+</span>
                            <input type="file" accept='image/*' />
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default ProductCover