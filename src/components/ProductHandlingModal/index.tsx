import styles from './styles.module.css'

import { useState } from 'react'
import { Close } from '@mui/icons-material'
import ProductScript from './ProductScript'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductColorAttribute from './ProductColorAttribute'
import ProductSizeAttribute from './ProductSizeAttribute'

import Product from '../../Domain/Entities/Product'
import ColorRef from '../../Domain/Entities/ColorRef'
import SizeRef from '../../Domain/Entities/SizeRef'

type Props = {
    product: Product
    onCloseProduct: () => void
    editable?: boolean
}

const ProductHandlingModal = (props: Props) => {
    const [productName, setProductName] = useState<string>('')
    const [productDescription, setProductDescription] = useState<string>('')
    const [productPrice, setProductPrice] = useState<string>('')
    const [productColors, setProductColors] = useState<ColorRef[]>([])
    const [productSizes, setProductSizes] = useState<SizeRef[]>([])

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
                <img src={props.product.images[0].image.imageUrl} alt={props.product.images[0].image.imageAlt} />
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
                    <ProductColorAttribute
                        value={props.editable ? productColors : props.product.colors}
                        onChange={props.editable ? setProductColors : undefined}
                        editable={props.editable} />
                    <ProductSizeAttribute
                        value={props.editable ? productSizes : props.product.sizes}
                        onChange={props.editable ? setProductSizes : undefined}
                        editable={props.editable} />
                </section>
                {
                    props.editable &&
                    <div className={styles.product_footer}>
                        <button>Salvar</button>
                    </div>
                }
            </section>
        </article>
    )
}

export default ProductHandlingModal