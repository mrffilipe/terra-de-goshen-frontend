import styles from './styles.module.css';

import { Edit } from '@mui/icons-material';

type Props = {
    product: MinimumProductResponseDTO;
    isEditable?: boolean;
    onClick: () => void;
}

const ProductCard = (props: Props) => {
    return (
        <li
            className={styles.product_card}
            onClick={props.onClick}
            key={props.product.id}
            role='button'>
            {
                props.isEditable && (
                    <button className={styles.edit_btn}>
                        <Edit />
                    </button>
                )
            }
            <div
                className={styles.cover}
                style={{
                    backgroundImage: `url('${props.product.images[0].url}')`
                }}>
            </div>
            <div className={styles.details}>
                <span>{props.product.name}</span>
                <p>
                    <strong>R$ {props.product.price}</strong>
                </p>
            </div>
        </li>
    );
};

export default ProductCard;