import styles from './styles.module.css'

import { useEffect, useState } from 'react'

import { List, GridView } from '@mui/icons-material'
import PageHeaderTitle from '../../components/PageHeaderTitle'
import { Button } from '../../components/Buttons'
import ProductSession from '../../components/ProductSession'
import ProductList from '../../components/ProductList'
import ProductCardList from '../../components/ProductCardList'
import Overlay from '../../components/Overlay'
import ProductHandlingModal from '../../components/ProductHandlingModal'

import { useGetAllProducts } from '../../hooks/product/useProductService'

const StockPage = () => {
    const [listView, setListView] = useState<boolean>()
    const [openModal, setOpenModal] = useState<boolean>()
    const [products, getAllProducts] = useGetAllProducts()

    useEffect(() => {
        getAllProducts()
    }, [getAllProducts])

    const handleOpenModal = (): void => {
        setOpenModal(prev => !prev)
    }

    return (
        <article className={styles.stock_page}>
            <header className={styles.stock_header}>
                <PageHeaderTitle value='Gerenciar estoque' />
                <div className={styles.actions}>
                    <button
                        className={`${styles.btn} ${listView ? '' : styles.btn_selected}`}
                        onClick={() => setListView(false)}>
                        <GridView />
                    </button>
                    <button
                        className={`${styles.btn} ${listView ? styles.btn_selected : ''}`}
                        onClick={() => setListView(true)}>
                        <List />
                    </button>
                    <Button
                        className={styles.new_product_btn}
                        value='Novo produto'
                        onClick={handleOpenModal}
                    />
                </div>
            </header>
            <ProductSession>
                {
                    listView ?
                        <ProductList items={products} /> :
                        <ProductCardList items={products} />
                }
            </ProductSession>
            <Overlay isOverlayOpen={openModal}>
                <ProductHandlingModal editable />
            </Overlay>
        </article>
    )
}

export default StockPage