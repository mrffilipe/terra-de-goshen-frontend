import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';

import { SearchInputSubmit } from '../../components/SearchInput';
import Loading from '../../components/Loading';

import {
    useGetAllProducts,
    useGetProductsByName
} from '../../hooks/product/useProductService';

import { formatCurrencyBRL } from '../../utils/moneyUtils';
import ProductModal from '../../components/ProductModal';

const CatalogPage = () => {
    const [getAllProducts] = useGetAllProducts();
    const [getProductsByName] = useGetProductsByName();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<ProductResponseDTO[] | undefined>([]);
    const [selectedProduct, setSelectedProduct] = useState<ProductResponseDTO | null>(null);

    const fetchAndSetProducts = useCallback(async () => {
        setIsLoading(true);
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setIsLoading(false);
    }, [getAllProducts]);

    useEffect(() => {
        fetchAndSetProducts();
    }, [fetchAndSetProducts]);

    const handleSearchSubmit = async (productName: string) => {
        setIsLoading(true);
        const searchResults = await getProductsByName(productName);
        setProducts(searchResults);
        setIsLoading(false);
    };

    const handleCloseProductModal = () => {
        if (selectedProduct) {
            setSelectedProduct(null);
        }
    }

    const productList = products?.map((product) => (
        <div key={product.id} className={styles.product_card} onClick={() => setSelectedProduct(product)}>
            <div className={styles.image_container}>
                <img
                    src={product.images[0].url}
                    alt={product.name}
                    className={styles.product_image}
                />
            </div>
            <h3 className={styles.product_name}>{product.name}</h3>
            <p className={styles.product_price}>
                {formatCurrencyBRL(product.price)}
            </p>
        </div>
    ));

    return (
        <div className={styles.catalog_page}>
            <h2>Catálogo</h2>

            <div className={styles.actions}>
                <SearchInputSubmit
                    placeholder="Buscar produto por nome"
                    onSubmitSearch={handleSearchSubmit}
                />
            </div>

            <section className={styles.products_section}>
                {products && products.length > 0 ? (
                    <div className={styles.product_grid}>
                        {productList}
                    </div>
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </section>

            {selectedProduct && (
                <ProductModal product={selectedProduct} onCloseClick={handleCloseProductModal} />)}

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default CatalogPage;