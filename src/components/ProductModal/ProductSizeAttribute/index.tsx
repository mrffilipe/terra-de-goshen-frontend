import styles from './styles.module.css';

import { v4 as uuidv4 } from 'uuid';

type Props = {
    value: SizeResponseDTO[] | SizeCreateDTO[] | SizeUpdateDTO[];
};

const ProductSizeAttribute = (props: Props) => {
    const sizeList = props.value.map(size => (
        <li key={size.id ?? uuidv4()}>
            <span>{size.value}</span>
        </li>
    ));

    return (
        <ul className={styles.product_size_attribute}>
            {sizeList}
        </ul>
    );
};

export default ProductSizeAttribute;