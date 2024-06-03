import styles from './styles.module.css';

import { v4 as uuidv4 } from 'uuid';

type Props = {
    value: ColorResponseDTO[] | ColorCreateDTO[] | ProductUpdateDTO[];
};

const ProductColorAttribute = (props: Props) => {
    const colorList = props.value.map(color => (
        <li key={color.id ?? uuidv4()}>
            <span style={{ backgroundColor: color.value }}></span>
        </li>
    ));

    return (
        <ul className={styles.product_color_attribute}>
            {colorList}
        </ul>
    );
};

export default ProductColorAttribute;