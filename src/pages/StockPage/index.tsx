import styles from './styles.module.css';

import { useEffect, useState } from 'react';

import ProductSession from '../../components/ProductSession';
import ProductList from '../../components/ProductList';
import Loading from '../../components/Loading';

import { useGetProductsByParameter } from '../../hooks/product/useProductService';

const StockPage = () => {
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
        <article className={styles.stock_page}>
            {/* <PageHeaderTitle value='Feminino' /> */}
            <ProductSession>
                <ProductList items={products} onProductClick={handleOpeningProductModal} editableItems />
            </ProductSession>
            <Loading isLoading={isLoading} />
        </article>
    );
};

export default StockPage;