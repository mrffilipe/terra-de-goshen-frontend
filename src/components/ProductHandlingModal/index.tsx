import styles from './styles.module.css'

import { useState } from 'react'
import { Close } from '@mui/icons-material'

const ProductHandlingModal = () => {
    const [productName, setProductName] = useState<string>()
    const [productResume, setProductResume] = useState<string>()
    const [productPrice, setProductPrice] = useState<string>()
    const [productDescription, setProductDescription] = useState<string>()

    const handleProductName = (event): void => {
        setProductName(event.target.innerText)
    }

    const handleProductResume = (event): void => {
        setProductResume(event.target.innerText)
    }

    const handleProductPrice = (event): void => {
        setProductPrice(event.target.innerText)
    }

    const handleProductDescription = (event): void => {
        setProductDescription(event.target.innerText)
    }

    return (
        <article className={styles.product_handling_modal}>
            <section className={styles.product_cover}>
                <button className={styles.close_menu_btn}>
                    <Close />
                </button>
                <img src='https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dw9126436c/product-images/4149460_0046_CAMISETA-FEM-HAVAIANAS-ALOHA-VIBES_A.png?sw=680&sh=680' alt="" />
                <div className={styles.script}>
                    <span>J</span>
                    <span>a</span>
                    <span>q</span>
                    <span>u</span>
                    <span>e</span>
                    <span>t</span>
                    <span>a</span>
                </div>
            </section>
            <section className={styles.product_details}>
                <h1
                    className={styles.product_name}
                    contentEditable
                    onBlur={handleProductName}
                    suppressContentEditableWarning={true}>
                    {
                        productName ? productName : 'Digite o nome do produto'
                    }
                </h1>
                <span
                    className={styles.product_resume}
                    contentEditable
                    onBlur={handleProductResume}
                    suppressContentEditableWarning={true}>
                    {
                        productResume ? productResume : 'Digite o resumo do produto'
                    }
                </span>
                <span className={styles.product_price}>
                    R$ <strong
                        contentEditable
                        onBlur={handleProductPrice}
                        suppressContentEditableWarning={true}>
                        {
                            productPrice ? productPrice : '00,00'
                        }
                    </strong>
                </span>
                <p
                    className={styles.product_description}
                    contentEditable
                    onBlur={handleProductDescription}
                    suppressContentEditableWarning={true}>
                    {
                        productDescription ? productDescription : 'Digite a descrição do produto'
                    }
                </p>
                <section className={styles.product_attributes}>

                </section>
            </section>
        </article>
    )
}

export default ProductHandlingModal