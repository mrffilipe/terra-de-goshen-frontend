import styles from './styles.module.css'

import { useState } from 'react'
import { Close } from '@mui/icons-material'
import ProductScript from './ProductScript'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductColorAttribute from './ProductColorAttribute'
import ProductSizeAttribute from './ProductSizeAttribute'

type Props = {
    product: Product
    onCloseProduct: () => void
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
                <button className={styles.close_menu_btn} onClick={props.onCloseProduct}>
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
                    value={props.editable ? productName : props.product.name}
                    onChange={props.editable ? handleProductName : undefined} />
                <ProductDescription
                    value={props.editable ? productDescription : props.product.description}
                    onChange={props.editable ? handleProductDescription : undefined} />
                <ProductPrice
                    value={props.editable ? productPrice : props.product.price.toString()}
                    onChange={props.editable ? handleProductPrice : undefined} />
                <section className={styles.product_attributes}>
                    <ProductColorAttribute colors={props.product.colors} />
                    <ProductSizeAttribute sizes={props.product.sizes} />
                </section>
            </section>
        </article>
    )
}

export default ProductHandlingModal