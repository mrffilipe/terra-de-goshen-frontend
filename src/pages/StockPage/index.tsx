import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import ProductSession from '../../components/ProductSession';
import ProductHeader from '../../components/ProductHeader';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';
import ProductModal from '../../components/ProductModal';

import { useGetProductById, useGetProductsByParameter } from '../../hooks/product/useProductService';

const StockPage = () => {
    const [getAllProducts] = useGetProductsByParameter();
    const [getProductById] = useGetProductById();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, setProducts] = useState<MinimumProductResponseDTO[]>([]);
    const [product, setProduct] = useState<ProductResponseDTO | undefined>(undefined);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const fetchedProducts = await getAllProducts();

            setProducts(fetchedProducts);

            setIsLoading(false);
        })();
    }, [getAllProducts]);

    const handleOpeningProductModal = async (id: string) => {
        setIsLoading(true);

        const fetchedProduct = await getProductById(id);

        setProduct(fetchedProduct);

        setIsLoading(false);
    };

    return (
        <article className={styles.stock_page}>
            <ProductSession>
                <ProductHeader />
                <ProductList items={products} editableItems onProductClick={handleOpeningProductModal} />
            </ProductSession>
            <Loading isLoading={isLoading} />
            {product && <ProductModal product={product} onCloseProduct={() => setProduct(undefined)} />}
        </article>
    );
};

export default StockPage;