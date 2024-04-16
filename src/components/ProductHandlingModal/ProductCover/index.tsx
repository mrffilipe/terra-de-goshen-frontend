import styles from './styles.module.css'

import { Close } from '@mui/icons-material'

import ImageRef from '../../../Domain/Entities/ImageRef'

type Props = {
    images: ImageRef[]
    onCloseProduct: () => void
}

const ProductCover = (props: Props) => {
    return (
        <section className={styles.product_cover}>
            <button className={styles.close_menu_btn} onClick={props.onCloseProduct}>
                <Close />
            </button>
            <img src={props.images[0].image.imageUrl} alt={props.images[0].image.imageAlt} />
            <div className={styles.script}>
                <span>C</span>
                <span>a</span>
                <span>m</span>
                <span>i</span>
                <span>s</span>
                <span>e</span>
                <span>t</span>
                <span>a</span>
            </div>
        </section>
    )
}

export default ProductCover