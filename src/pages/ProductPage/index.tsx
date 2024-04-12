import styles from './styles.module.css'

import { useEffect, useState } from 'react'

import PageHeaderTitle from '../../components/PageHeaderTitle'
import ProductSession from '../../components/ProductSession'
import ProductCardList from '../../components/ProductCardList'
import Overlay from '../../components/Overlay'
import ProductHandlingModal from '../../components/ProductHandlingModal'

import { useGetAllProducts } from '../../hooks/product/useProductService'

const ProductPage = () => {
    const [openModal, setOpenModal] = useState<boolean>()
    const [product, setProduct] = useState<Product>()
    const [products, getAllProducts] = useGetAllProducts()

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts])

    const handleOpenModal = (): void => {
        setProduct(undefined)
        setOpenModal(prev => !prev)
    }

    const handleSetProduct = (product: Product): void => {
        setOpenModal(true)
        setProduct(product)
    }

    return (
        <article className={styles.product_page}>
            <PageHeaderTitle value='Feminino' />
            <ProductSession>
                <ProductCardList items={products} onProductClick={handleSetProduct} />
            </ProductSession>
            {
                product &&
                <Overlay isOverlayOpen={openModal}>
                    <ProductHandlingModal product={product} onCloseProduct={handleOpenModal} />
                </Overlay>
            }
        </article>
    )
}

export default ProductPage