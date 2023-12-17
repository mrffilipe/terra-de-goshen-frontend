import styles from './styles.module.css'

import Image from 'next/image'

import Camiseta from '@/assets/img/camiseta.png'

const ProductCard = () => {
    return (
        <div className={styles.product}>
            <div className={styles.cover}>
                <Image src={Camiseta} alt='Camiseta' />
            </div>
            <h4>CACETE AZUL COM DETALHES VERMELHOS</h4>
            <span>R$ 280,00</span>
        </div>
    )
}

export default ProductCard