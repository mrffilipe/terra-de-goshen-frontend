import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';

import { SearchInputSubmit } from '../../components/SearchInput';
import Loading from '../../components/Loading';

import {
    useGetAllProducts,
    useGetProductsByParameter
} from '../../hooks/product/useProductService';

import { formatCurrencyBRL } from '../../utils/moneyUtils';
import { formatDate } from '../../utils/dateUtils';

const CatalogPage = () => {
    const [getAllProducts] = useGetAllProducts();
    const [getProductsByParameter] = useGetProductsByParameter();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<ProductResponseDTO[] | undefined>([]);

    const fetchAndSetProducts = useCallback(async () => {
        setIsLoading(true);
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setIsLoading(false);
    }, [getAllProducts]);

    useEffect(() => {
        fetchAndSetProducts();
    }, [fetchAndSetProducts]);

    const handleSearchSubmit = async (query: string) => {
        setIsLoading(true);
        const searchResults = await getProductsByParameter(query);
        setProducts(searchResults);
        setIsLoading(false);
    };

    const productList = products?.map((product) => (
        <div key={product.id} className={styles.product_card}>
            <img
                // src={product.images[0]?.url || 'https://d8vlg9z1oftyc.cloudfront.net/ailos/image/product/7b1ed85e9ec6a3c690e9d8ceab110cfa20221020074114/original/camiseta-feminina-zatom-bicicleta_1928.png'}
                src='https://d8vlg9z1oftyc.cloudfront.net/ailos/image/product/7b1ed85e9ec6a3c690e9d8ceab110cfa20221020074114/original/camiseta-feminina-zatom-bicicleta_1928.png'
                alt={product.name}
                className={styles.product_image}
            />
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

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default CatalogPage;