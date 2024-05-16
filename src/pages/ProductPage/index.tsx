import styles from './styles.module.css'

import { useEffect, useState } from 'react'

import PageHeaderTitle from '../../components/PageHeaderTitle'
import ProductSession from '../../components/ProductSession'
import ProductCardList from '../../components/ProductCardList'
import Overlay from '../../components/Overlay'
import ProductHandlingModal from '../../components/ProductHandlingModal'

import Product from '../../Domain/Entities/Product'
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
        setProduct(new Product(
            "Camiseta polo",
            "Teste produto",
            129.90,
            [{ id: '123', image: { imageAlt: '', imageUrl: 'https://d8vlg9z1oftyc.cloudfront.net/ailos/image/product/7b1ed85e9ec6a3c690e9d8ceab110cfa20221020074114/850/camiseta-feminina-zatom-bicicleta_1928.png' }, createdAt: '', updatedAt: '' }],
            { existingColors: [{ id: '123', value: '#000', imageId: '', createdAt: '', updatedAt: '' }] },
            [{ id: '123', size: { value: 'gg' }, createdAt: '', updatedAt: '' }],
            { id: '123', category: { name: 'Teste' }, createdAt: '', updatedAt: '' },
            10
        ))
        // setProduct(product)
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