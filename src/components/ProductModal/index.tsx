import styles from './styles.module.css';

import { Close } from '@mui/icons-material';

import Overlay from '../Overlay';
import ProductCover from './ProductCover';
import ProductName from './ProductName';
import ProductDescription from './ProductDescription';
import ProductPrice from './ProductPrice';
import ProductColorAttribute from './ProductColorAttribute';
import ProductSizeAttribute from './ProductSizeAttribute';

type Props = {
    product: ProductResponseDTO | ProductCreateDTO | ProductUpdateDTO;
    onCloseProduct: () => void;
};

const ProductModal = (props: Props) => {
    return (
        <Overlay className={styles.product_modal_overlay} isOverlayOpen>
            <div className={styles.product_modal}>
                <div className={styles.close_modal_btn}>
                    <button onClick={props.onCloseProduct}>
                        <Close />
                    </button>
                </div>
                <ProductCover backgroundText={props.product.backgroundText || props.product.category.name} value={props.product.images} />
                <section className={styles.product_details}>
                    <ProductName value={props.product.name} />
                    <ProductDescription value={props.product.description} />
                    <ProductPrice value={props.product.price} />
                    <section className={styles.product_attributes}>
                        <ProductColorAttribute value={props.product.colors} />
                        <ProductSizeAttribute value={props.product.sizes} />
                    </section>
                </section>
            </div>
        </Overlay>
    );
};

export default ProductModal;