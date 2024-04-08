import styles from './styles.module.css'

import { useState } from 'react'
import { List, GridView } from '@mui/icons-material'
import PageHeaderTitle from '../../components/PageHeaderTitle'
import { Button } from '../../components/Buttons'
import ProductSession from '../../components/ProductSession'
import ProductList from '../../components/ProductList'
import ProductCardList from '../../components/ProductCardList'
import Overlay from '../../components/Overlay'
import ProductHandlingModal from '../../components/ProductHandlingModal'

const products: Array<ProductCard> = [
    {
        id: '123',
        imageUrl: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw9126436c/product-images/4149460_0046_CAMISETA-FEM-HAVAIANAS-ALOHA-VIBES_A.png?sw=680&sh=680',
        name: 'Camiseta fem havaianas aloha vibes',
        price: '129,90',
        editable: true
    },
    {
        id: '123',
        imageUrl: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw9126436c/product-images/4149460_0046_CAMISETA-FEM-HAVAIANAS-ALOHA-VIBES_A.png?sw=680&sh=680',
        name: 'Camiseta fem havaianas aloha vibes',
        price: '129,90',
        editable: true
    },
    {
        id: '123',
        imageUrl: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw9126436c/product-images/4149460_0046_CAMISETA-FEM-HAVAIANAS-ALOHA-VIBES_A.png?sw=680&sh=680',
        name: 'Camiseta fem havaianas aloha vibes',
        price: '129,90',
        editable: true
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    },
    {
        id: '123',
        imageUrl: 'https://cdn.sistemawbuy.com.br/arquivos/a47311a2afa9f9eb2932dc182a3014d4/produtos/65d65cc6e60c4/camiseta_taca_coracao_preto_125_1_f3b4902b2e5186b2ce4bf6e713ebcb2c-65d66838d3664.webp',
        name: 'Camiseta taca coração preto',
        price: '129,90'
    }
]

const StockPage = () => {
    const [listView, setListView] = useState<boolean>()
    const [openModal, setOpenModal] = useState<boolean>()

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