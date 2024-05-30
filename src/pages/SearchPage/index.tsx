import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import PageHeaderTitle from '../../components/PageHeaderTitle';
import ProductSession from '../../components/ProductSession';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';

import { useGetProductsByParameter } from '../../hooks/product/useProductService';

const SearchPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [products, getAllProducts] = useGetProductsByParameter();

    useEffect(() => {
        (async (): Promise<void> => {
            setIsLoading(true);
            await getAllProducts();
            setIsLoading(false);
        })();
    }, [getAllProducts]);

    const handleOpeningProductModal = (id: string): void => {

    }

    return (
        <article className={styles.product_page}>
            <PageHeaderTitle value='Feminino' />
            <ProductSession>
                <ProductList items={products} onProductClick={handleOpeningProductModal} />
            </ProductSession>
            <Loading isLoading={isLoading} />
        </article>
    );
};

export default SearchPage;