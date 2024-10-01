import styles from './styles.module.css';

import Overlay from '../Overlay';

import { formatCurrencyBRL } from '../../utils/moneyUtils';

type Props = {
    product: ProductResponseDTO;
    onCloseClick: () => void;
};

const ProductModal = ({ product, onCloseClick }: Props) => {
    return (
        <Overlay activeOverlay>
            <div className={styles.product_modal} aria-modal="true">
                <button className={styles.close_button} onClick={onCloseClick} aria-label="Close Modal">
                    &times;
                </button>

                <div className={styles.modal_content}>
                    <div className={styles.image_section}>
                        <img
                            src={product.images[0].url}
                            alt={product.name}
                            className={styles.main_image}
                        />
                        <div className={styles.image_list}>
                            {product.images.map((image) => (
                                <img
                                    key={image.id}
                                    src={image.url}
                                    alt={`${product.name} image ${image.id}`}
                                    className={styles.thumbnail}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.info_section}>
                        <h2 className={styles.product_name}>{product.name}</h2>
                        <p className={styles.product_description}>{product.description}</p>
                        <p className={styles.product_price}>{formatCurrencyBRL(product.price)}</p>
                    </div>
                </div>
            </div>
        </Overlay>
    );
};

export default ProductModal;