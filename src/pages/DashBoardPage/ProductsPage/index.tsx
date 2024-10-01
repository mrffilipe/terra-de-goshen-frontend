import styles from './styles.module.css';

import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import { SearchInputSubmit } from '../../../components/SearchInput';
import TableData from '../../../components/TableData';
import Loading from '../../../components/Loading';

import {
    useGetAllProducts,
    useGetProductsByName
} from '../../../hooks/product/useProductService';

import { formatCurrencyBRL } from '../../../utils/moneyUtils';
import { formatDate } from '../../../utils/dateUtils';

const ProductsPage = () => {
    const [getAllProducts] = useGetAllProducts();
    const [getProductsByName] = useGetProductsByName();
    const [isLoading, setIsLoading] = useState(false);
    const [products, setProducts] = useState<ProductResponseDTO[] | undefined>([]);

    const navigate = useNavigate();

    const fetchAndSetProducts = useCallback(async () => {
        setIsLoading(true);
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
        setIsLoading(false);
    }, [getAllProducts]);

    useEffect(() => {
        fetchAndSetProducts();
    }, [fetchAndSetProducts]);

    const handleViewEditorPage = () => {
        navigate(`/dashboard/products/editor`);
    };

    const handleSearchSubmit = async (productName: string) => {
        setIsLoading(true);
        const searchResults = await getProductsByName(productName);
        setProducts(searchResults);
        setIsLoading(false);
    };

    const headerNames = [
        "ID", "Nome", "Valor de venda", "Custo do produto", "Estoque", "Categoria", "Data", "Ações"
    ];

    const dataList = products ? (
        products.map((product) => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{formatCurrencyBRL(product.price)}</td>
                <td>{formatCurrencyBRL(product.costPrice)}</td>
                <td>{product.stock}</td>
                <td>{product.category.name}</td>
                <td>{formatDate(product.createdAt)}</td>
                <td>
                    <button onClick={undefined}>Editar</button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan={8}>Nenhum produto encontrado</td>
        </tr>
    );

    return (
        <div className={styles.products_page}>
            <h2>Gerenciar Produtos</h2>

            <div className={styles.actions}>
                <Button
                    value='Novo produto'
                    disabled={isLoading}
                    onClick={handleViewEditorPage}
                />

                <SearchInputSubmit
                    placeholder="Buscar produto por nome"
                    onSubmitSearch={handleSearchSubmit}
                />
            </div>

            <section className={styles.products_section}>
                <TableData title='Lista de Produtos' headerNames={headerNames} data={dataList} />
            </section>

            <Loading isLoading={isLoading} />
        </div>
    );
};

export default ProductsPage;