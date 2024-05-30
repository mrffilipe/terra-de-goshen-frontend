import styles from './styles.module.css';

import ProductCard from './ProductCard';

type Props = {
    items: MinimumProductResponseDTO[];
    editableItems?: boolean;
    onProductClick: (id: string) => void;
};

const ProductList = (props: Props) => {
    const listItems = props.items.map(product => {
        return (
            <ProductCard
                product={{
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    images: product.images,
                    createdAt: product.createdAt,
                    updatedAt: product.updatedAt
                }}
                onClick={() => props.onProductClick(product.id)}
                isEditable={props.editableItems} />
        );
    });

    return (
        <ul className={styles.product_list}>
            {listItems}
        </ul>
    );
};

export default ProductList;