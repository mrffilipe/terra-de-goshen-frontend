import styles from './styles.module.css';

import { Edit, Delete } from '@mui/icons-material';

type Props = {
    product: MinimumProductResponseDTO;
    isEditable?: boolean;
    onClick: () => void;
    onClickEdit?: () => void;
    onClickDelete?: () => void;
}

const ProductCard = (props: Props) => {
    return (
        <li
            className={styles.product_card}
            role='button'
            onClick={props.onClick}>
            {
                props.isEditable && (
                    <div className={styles.actions}>
                        <button onClick={props.onClickEdit}>
                            <Edit />
                        </button>
                        <button onClick={props.onClickDelete}>
                            <Delete />
                        </button>
                    </div>
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