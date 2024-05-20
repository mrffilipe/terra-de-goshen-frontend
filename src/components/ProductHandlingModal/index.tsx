import styles from './styles.module.css'

import { useEffect, useState } from 'react'

import ProductCover from './ProductCover'
import ProductName from './ProductName'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductColorAttribute from './ProductColorAttribute'
import ProductSizeAttribute from './ProductSizeAttribute'

import Product from '../../Domain/Entities/Product'

type Props = {
    product?: Product
    editable?: boolean
    onCloseProduct: () => void
}

const ProductHandlingModal = (props: Props) => {
    const [productName, setProductName] = useState<string>('')
    const [productDescription, setProductDescription] = useState<string>('')
    const [productPrice, setProductPrice] = useState<string>('')
    const [productColors, setProductColors] = useState<Color>({
        existingColors: [],
        newColors: [],
        deletedColors: []
    })
    const [productSizes, setProductSizes] = useState<Size>({
        existingSizes: [],
        newSizes: [],
        deletedSizes: []
    })
    const [productImages, setProductImages] = useState<Image>({
        existingImages: [],
        newImages: [],
        deletedImages: [],
        updatedImages: []
    })

    useEffect(() => {
        if (props.product !== undefined) {
            setProductName(props.product.name)
            setProductDescription(props.product.description)
            setProductPrice(props.product.price.toString())
            setProductColors(props.product.colors)
            setProductSizes(props.product.sizes)
            setProductImages(props.product.images)
        }
    }, [])

    const handleProductName = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setProductName(event.target.value)
    }

    const handleProductDescription = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setProductDescription(event.target.value)
    }

    const handleProductPrice = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setProductPrice(event.target.value)
    }

    const handleProductColor = (color: Color): void => {
        setProductColors(color)
    }

    const handleProductSize = (size: Size): void => {
        setProductSizes(size)
    }

    const handleProductImage = (image: Image): void => {
        setProductImages(image)
    }

    return (
        <article className={styles.product_handling_modal}>
            <ProductCover
                value={productImages}
                editable={props.editable}
                onChange={props.editable ? handleProductImage : undefined}
                onCloseProduct={props.onCloseProduct} />
            <section className={styles.product_details}>
                <ProductName
                    value={productName}
                    editable={props.editable}
                    onChange={props.editable ? handleProductName : undefined} />
                <ProductDescription
                    value={productDescription}
                    editable={props.editable}
                    onChange={props.editable ? handleProductDescription : undefined} />
                <ProductPrice
                    value={productPrice}
                    editable={props.editable}
                    onChange={props.editable ? handleProductPrice : undefined} />
                <section className={styles.product_attributes}>
                    <ProductColorAttribute
                        value={productColors}
                        editable={props.editable}
                        onChange={props.editable ? handleProductColor : undefined} />
                    <ProductSizeAttribute
                        value={productSizes}
                        editable={props.editable}
                        onChange={props.editable ? handleProductSize : undefined} />
                </section>
                {
                    props.editable && (
                        <div className={styles.product_footer}>
                            <button>Salvar</button>
                        </div>
                    )
                }
            </section>
        </article>
    )
}

export default ProductHandlingModal