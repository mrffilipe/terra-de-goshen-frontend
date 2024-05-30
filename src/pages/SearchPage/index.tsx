import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import PageHeaderTitle from '../../components/PageHeaderTitle';
import ProductSession from '../../components/ProductSession';
import ProductList from '../../components/ProductList';
import { useGetProductsByParameter } from '../../hooks/product/useProductService';
import Loading from '../../components/Loading';

const SearchPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [products, getAllProducts] = useGetProductsByParameter();

    useEffect(() => {
        setIsLoading(true);
        getAllProducts();
        setIsLoading(false);
    }, [getAllProducts]);

    if (isLoading) {
        return <Loading isLoading />
    }

    const handleOpeningProductModal = (id: string): void => {

    }

    return (
        <article className={styles.product_page}>
            <PageHeaderTitle value='Feminino' />
            <ProductSession>
                <ProductList items={products} onProductClick={handleOpeningProductModal} />
            </ProductSession>
        </article>
    );
};

export default SearchPage;