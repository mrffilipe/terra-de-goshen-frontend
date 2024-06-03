import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import PageHeaderTitle from '../../components/PageHeaderTitle';
import ProductSession from '../../components/ProductSession';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';
import ProductModal from '../../components/ProductModal';

import { useGetProductById, useGetProductsByParameter } from '../../hooks/product/useProductService';

const SearchPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [getAllProducts] = useGetProductsByParameter();
    const [getProductById] = useGetProductById();
    const [products, setProducts] = useState<MinimumProductResponseDTO[]>([]);
    const [product, setProduct] = useState<ProductResponseDTO | undefined>(undefined);

    useEffect(() => {
        (async (): Promise<void> => {
            setIsLoading(true);
            const fetchedProducts = await getAllProducts();
            setProducts(fetchedProducts);
            setIsLoading(false);
        })();
    }, [getAllProducts]);

    const handleOpeningProductModal = async (id: string): Promise<void> => {
        setIsLoading(true);

        const fetchedProduct = await getProductById(id);

        setProduct(fetchedProduct);

        setIsLoading(false);
    };

    return (
        <article className={styles.search_page}>
            <PageHeaderTitle value='Feminino' />
            <ProductSession>
                <ProductList items={products} onProductClick={handleOpeningProductModal} />
            </ProductSession>
            <Loading isLoading={isLoading} />
            {product && <ProductModal product={product} onCloseProduct={() => setProduct(undefined)} />}
        </article>
    );
};

export default SearchPage;