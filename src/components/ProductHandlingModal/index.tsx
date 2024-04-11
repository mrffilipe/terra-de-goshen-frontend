import styles from './styles.module.css'

import { useState } from 'react'
import { Close } from '@mui/icons-material'
import ProductScript from './ProductScript'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'

type Props = {
    product: Product
    editable?: boolean
}

const ProductHandlingModal = (props: Props) => {
    const [productName, setProductName] = useState<string>('')
    const [productDescription, setProductDescription] = useState<string>('')
    const [productPrice, setProductPrice] = useState<string>('')

    const handleProductName = (event: any): void => {
        setProductName(event.target.innerText)
    }

    const handleProductDescription = (event: any): void => {
        setProductDescription(event.target.innerText)
    }

    const handleProductPrice = (event: any): void => {
        setProductPrice(event.target.innerText)
    }

    return (
        <article className={styles.product_handling_modal}>
            <section className={styles.product_cover}>
                <button className={styles.close_menu_btn}>
                    <Close />
                </button>
                <img src='https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw9126436c/product-images/4149460_0046_CAMISETA-FEM-HAVAIANAS-ALOHA-VIBES_A.png?sw=680&sh=680' alt="" />
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
            <section className={styles.product_details}>
                <ProductName
                    value={productName}
                    onChange={props.editable ? handleProductName : undefined} />
                <ProductDescription
                    value={productDescription}
                    onChange={props.editable ? handleProductDescription : undefined} />
                <ProductPrice
                    value={productPrice}
                    onChange={props.editable ? handleProductPrice : undefined} />
                <section className={styles.product_attributes}>
                    <ul className={styles.color_attribute}>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                    <ul className={styles.size_attribute}>
                        <li><span>P</span></li>
                        <li><span>M</span></li>
                        <li><span>G</span></li>
                        <li><span>GG</span></li>
                        <li><span>XG</span></li>
                    </ul>
                </section>
            </section>
        </article>
    )
}

export default ProductHandlingModal